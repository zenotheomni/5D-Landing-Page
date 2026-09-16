import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arcadeTrack } from '../analytics';
import { COPY } from '../config';
import '../arcade.css';

export default function KeyLanding() {
  useEffect(() => {
    arcadeTrack('arcade_route_view', { route: '/arcade/key' });
  }, []);

  return (
    <div className="arcade-root">
      <div className="arcade-hum" />
      <div className="arcade-page">
        <Link to="/arcade" className="arcade-back">
          ← The Fifth Floor
        </Link>
        <span className="arcade-pill">NFC · M5</span>
        <h1>Arcade key</h1>
        <div className="key-pulse" aria-hidden>
          KEY
        </div>
        <p className="lede" style={{ textAlign: 'center' }}>
          {COPY.keyAcquired}
        </p>
        <p className="lede" style={{ textAlign: 'center' }}>
          NFC claim + entitlement wiring lands in M5. This route is live for tap deep-links.
        </p>
        <div className="arcade-cta-row">
          <Link to="/arcade" className="arcade-cta primary">
            Enter The Fifth Floor
          </Link>
        </div>
      </div>
    </div>
  );
}
