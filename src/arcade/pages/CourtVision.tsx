import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arcadeTrack } from '../analytics';
import { COPY } from '../config';
import '../arcade.css';

export default function CourtVision() {
  useEffect(() => {
    arcadeTrack('arcade_route_view', { route: '/arcade/court-vision', game: 'court-vision' });
  }, []);

  return (
    <div className="arcade-root">
      <div className="arcade-hum" />
      <div className="arcade-page">
        <Link to="/arcade" className="arcade-back">
          ← The Fifth Floor
        </Link>
        <span className="arcade-pill">Endless · M2</span>
        <h1>Court Vision</h1>
        <p className="lede">
          Finger-flick basketball. Hold, aim, release. Soft CTAs only after the run.
        </p>
        <p className="lede">{COPY.youreIn} Gameplay ships in M2 — this shell is live so routes and analytics can land.</p>
        <div className="arcade-cta-row">
          <Link to="/arcade" className="arcade-cta primary">
            Back to lobby
          </Link>
          <a className="arcade-cta ghost" href="https://5dimperial.com" target="_blank" rel="noreferrer">
            Enter boutique
          </a>
        </div>
      </div>
    </div>
  );
}
