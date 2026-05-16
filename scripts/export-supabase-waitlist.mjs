import { createClient } from '@supabase/supabase-js';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const parseEnv = (text) => Object.fromEntries(
  text
    .split(/\r?\n/)
    .filter(Boolean)
    .filter((line) => !line.startsWith('#'))
    .map((line) => {
      const index = line.indexOf('=');
      const key = line.slice(0, index);
      let value = line.slice(index + 1);

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      return [key, value];
    }),
);

const csvEscape = (value) => {
  if (value === null || value === undefined) return '';

  const text = String(value);
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }

  return text;
};

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputDir = path.resolve('backups/supabase-exports', timestamp);
const envFile = path.join(tmpdir(), `5d-production-env-${timestamp}.env`);

mkdirSync(outputDir, { recursive: true });

try {
  execFileSync(
    'npx',
    ['vercel', 'env', 'pull', envFile, '--environment=production', '--yes'],
    { stdio: 'ignore' },
  );

  const env = parseEnv(readFileSync(envFile, 'utf8'));
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY);
  const { data, error } = await supabase
    .from('waitlist')
    .select('id,name,email,phone,created_at')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Supabase export failed: ${error.message}`);
  }

  const rows = data || [];
  const columns = ['id', 'name', 'email', 'phone', 'created_at'];
  const csv = [
    columns.join(','),
    ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')),
  ].join('\n');

  writeFileSync(path.join(outputDir, 'waitlist.json'), JSON.stringify(rows, null, 2));
  writeFileSync(path.join(outputDir, 'waitlist.csv'), `${csv}\n`);
  writeFileSync(path.join(outputDir, 'summary.json'), JSON.stringify({
    exportedAt: new Date().toISOString(),
    table: 'public.waitlist',
    rowCount: rows.length,
  }, null, 2));

  console.log(JSON.stringify({
    ok: true,
    outputDir,
    rowCount: rows.length,
  }, null, 2));
} finally {
  rmSync(envFile, { force: true });
}
