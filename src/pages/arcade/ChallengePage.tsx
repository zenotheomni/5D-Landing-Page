import { Link, useParams } from 'react-router-dom';
import '../../arcade/arcade.css';

export default function ChallengePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="arcade-root">
      <div className="arcade-glow arcade-glow--signal" aria-hidden />
      <div className="arcade-shell">
        <h1 className="arcade-shell__title">Challenge</h1>
        <p className="arcade-shell__copy">Stub landing for a shared challenge.</p>
        <p className="arcade-shell__id">{id ?? '—'}</p>
        <div className="arcade-shell__actions">
          <Link className="arcade-back" to="/arcade">
            ← Back to the floor
          </Link>
        </div>
      </div>
    </div>
  );
}
