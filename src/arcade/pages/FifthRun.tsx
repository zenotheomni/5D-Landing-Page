import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arcadeTrack } from '../analytics';
import { COPY } from '../config';
import '../arcade.css';

export default function FifthRun() {
  useEffect(() => {
    arcadeTrack('arcade_route_view', { route: '/arcade/fifth-run', game: 'fifth-run' });
  }, []);

  return (
    <div className="arcade-root">
      <div className="arcade-hum" />
      <div className="arcade-page">
        <Link to="/arcade" className="arcade-back">
          ← The Fifth Floor
        </Link>
        <span className="arcade-pill">Endless · M4</span>
        <h1>Fifth Run</h1>
        <p className="lede">
          Three lanes. Swipe, jump, slide. Marks, vinyl, keys. Night megacity tunnel.
        </p>
        <p className="lede">{COPY.alreadyMoving} Endless + challenge land in M4.</p>
        <div className="arcade-cta-row">
          <Link to="/arcade" className="arcade-cta primary">
            Back to lobby
          </Link>
          <Link to="/arcade" className="arcade-cta ghost">
            Enter record store
          </Link>
        </div>
      </div>
    </div>
  );
}
