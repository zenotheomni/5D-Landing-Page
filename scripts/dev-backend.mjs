import app from '../api/index.ts';

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
  console.log(`5D landing backend listening on http://127.0.0.1:${port}`);
});
