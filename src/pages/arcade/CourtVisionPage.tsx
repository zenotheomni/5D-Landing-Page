import { Link } from 'react-router-dom';
import '../../arcade/arcade.css';

export default function CourtVisionPage() {
  return (
    <div className="arcade-root">
      <div className="arcade-glow arcade-glow--ink" aria-hidden />
      <div className="arcade-glow arcade-glow--signal" aria-hidden />
      <div className="arcade-shell">
        <h1 className="arcade-shell__title">Court Vision</h1>
        <p className="arcade-shell__copy">You&apos;re in.</p>
        <div className="arcade-shell__actions">
          <span className="arcade-soft-cta arcade-soft-cta--muted">
            Play Endless — soon
          </span>
          <Link className="arcade-back" to="/arcade">
            ← Back to the floor
          </Link>
        </div>
      </div>
    </div>
  );
}
