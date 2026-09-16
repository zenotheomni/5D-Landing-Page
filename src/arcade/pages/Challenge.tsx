import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { arcadeTrack } from '../analytics';
import { COPY } from '../config';
import '../arcade.css';

export default function Challenge() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    arcadeTrack('arcade_route_view', { route: '/arcade/challenge/:id', challengeId: id ?? '' });
  }, [id]);

  return (
    <div className="arcade-root">
      <div className="arcade-hum" />
      <div className="arcade-page">
        <Link to="/arcade" className="arcade-back">
          ← The Fifth Floor
        </Link>
        <span className="arcade-pill">Challenge · M3</span>
        <h1>Friend challenge</h1>
        <p className="lede">Challenge id: <code style={{ color: 'var(--mint)' }}>{id ?? '—'}</code></p>
        <p className="lede">{COPY.almost} Load + score compare ships in M3.</p>
        <div className="arcade-cta-row">
          <Link to="/arcade" className="arcade-cta primary">
            {COPY.runItBack}
          </Link>
        </div>
      </div>
    </div>
  );
}
