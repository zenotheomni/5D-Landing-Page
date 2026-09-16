import { Link } from 'react-router-dom';
import '../../arcade/arcade.css';

export default function KeyPage() {
  return (
    <div className="arcade-root">
      <div className="arcade-glow arcade-glow--mint" aria-hidden />
      <div className="arcade-glow arcade-glow--ink" aria-hidden />
      <div className="arcade-shell">
        <h1 className="arcade-shell__title">Key acquired.</h1>
        <p className="arcade-shell__copy">
          NFC energy locked in. The floor knows you&apos;re here.
        </p>
        <div className="arcade-shell__actions">
          <Link className="arcade-soft-cta" to="/arcade">
            Enter the lobby
          </Link>
          <Link className="arcade-back" to="/arcade">
            ← The Fifth Floor
          </Link>
        </div>
      </div>
    </div>
  );
}
