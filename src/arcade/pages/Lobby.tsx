import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { arcadeTrack } from '../analytics';
import { CABINETS, DOCK_LINKS } from '../config';
import { getArcadeAnonId } from '../identity';
import type { CabinetConfig } from '../types';
import '../arcade.css';

function CabinetPreview({ kind }: { kind: CabinetConfig['previewKind'] }) {
  if (kind === 'basketball') {
    return (
      <div className="preview-court" aria-hidden>
        <div className="preview-rim" />
        <div className="preview-ball" />
      </div>
    );
  }
  if (kind === 'runner') {
    return (
      <div className="preview-run" aria-hidden>
        <div className="preview-lanes">
          <span>
            <i className="preview-obstacle" style={{ animationDelay: '0.4s' }} />
          </span>
          <span />
          <span>
            <i className="preview-obstacle" style={{ animationDelay: '1.6s' }} />
          </span>
        </div>
        <div className="preview-runner" />
      </div>
    );
  }
  return (
    <div className={kind === 'pool' ? 'preview-pool' : 'preview-race'} aria-hidden>
      <div className="preview-soon">Coming up</div>
    </div>
  );
}

function CabinetCard({ cabinet }: { cabinet: CabinetConfig }) {
  const live = cabinet.status === 'live' && cabinet.route;

  const inner = (
    <>
      {cabinet.badge && <span className="cabinet-badge">{cabinet.badge}</span>}
      {cabinet.status === 'coming' && (
        <span className="cabinet-badge coming-up">Coming up</span>
      )}
      <div className="cabinet-glass">
        <CabinetPreview kind={cabinet.previewKind} />
      </div>
      <div className="cabinet-meta">
        <h2>{cabinet.title}</h2>
        <p>{cabinet.status === 'live' ? 'Tap in' : 'Not yet'}</p>
      </div>
    </>
  );

  if (live) {
    return (
      <Link
        to={cabinet.route!}
        className="cabinet live"
        onClick={() => arcadeTrack('arcade_cabinet_tap', { cabinet: cabinet.id })}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="cabinet coming" aria-disabled="true">
      {inner}
    </div>
  );
}

export default function Lobby() {
  const arcadeUrl = useMemo(() => {
    if (typeof window === 'undefined') return 'https://5-d-landing-page.vercel.app/arcade';
    return `${window.location.origin}/arcade`;
  }, []);

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(arcadeUrl)}`;

  useEffect(() => {
    getArcadeAnonId();
    arcadeTrack('arcade_lobby_view');
    arcadeTrack('arcade_route_view', { route: '/arcade' });
  }, []);

  return (
    <div className="arcade-root">
      <div className="arcade-hum" />

      <div className="arcade-desktop-gate">
        <p className="arcade-ticket-stub">Fifth Dimension</p>
        <h1>The Fifth Floor</h1>
        <p>Open on your phone. The arcade is built for thumb reach and night glow.</p>
        <div className="arcade-qr">
          <img src={qrSrc} alt="QR code to open The Fifth Floor on your phone" />
        </div>
        <p style={{ fontSize: '0.8rem' }}>{arcadeUrl}</p>
      </div>

      <div className="arcade-shell">
        <header className="arcade-ticket">
          <span className="arcade-ticket-stub">Admit one · After hours</span>
          <h1>The Fifth Floor</h1>
          <div className="arcade-ticket-line" />
        </header>

        <div className="cabinet-rail" role="list">
          {CABINETS.map((cabinet) => (
            <div key={cabinet.id} role="listitem" style={{ display: 'contents' }}>
              <CabinetCard cabinet={cabinet} />
            </div>
          ))}
        </div>

        <div className="challenge-teaser">BEAT JENKS&apos;S score</div>

        <nav className="arcade-dock" aria-label="Fifth Floor dock">
          {DOCK_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              onClick={() => arcadeTrack('arcade_dock_tap', { dock: link.id })}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
