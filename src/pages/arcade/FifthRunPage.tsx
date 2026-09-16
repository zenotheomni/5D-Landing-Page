import { Link } from 'react-router-dom';
import '../../arcade/arcade.css';

export default function FifthRunPage() {
  return (
    <div className="arcade-root">
      <div className="arcade-glow arcade-glow--mint" aria-hidden />
      <div className="arcade-glow arcade-glow--signal" aria-hidden />
      <div className="arcade-shell">
        <h1 className="arcade-shell__title">Fifth Run</h1>
        <p className="arcade-shell__copy">You&apos;re already moving.</p>
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
