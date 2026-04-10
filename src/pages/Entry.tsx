import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please provide an email address.');
      return;
    }

    if (!consent) {
      setError('Please agree to receive updates.');
      return;
    }

    setLoading(true);

    try {
      // Connect to the backend API (Serverless function on Vercel)
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: firstName, email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error joining the movement. Please try again.');
      }

      navigate('/welcome');
    } catch (err: any) {
      setError(err.message || 'Error joining the movement. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="hero">
      <div className="logo-container">
        <img src="/logo.png" alt="Fifth Dimension Logo" className="logo-image" />
        <div className="logo-text">FIFTH DIMENSION</div>
      </div>

      <div className="hero-content">
        <h1>PLEAD THE FIFTH</h1>
        <p>
          Join a premium world of music, garments, drops, and elevated identity.<br />
          Get the signal before the public does.<br />
          This is The Foundation.<br />
          <br />
          <span style={{color: 'var(--cosmic-violet)', fontWeight: 'bold'}}>We in the FIFTH 🖐🏽💫</span>
        </p>

        <div className="perks-list">
          <div className="perk-item">
            <span className="perk-emoji">✨</span>
            <span>Private drops</span>
          </div>
          <div className="perk-item">
            <span className="perk-emoji">🎵</span>
            <span>Unreleased music</span>
          </div>
          <div className="perk-item">
            <span className="perk-emoji">🎟️</span>
            <span>Event access</span>
          </div>
          <div className="perk-item">
            <span className="perk-emoji">🖐🏽</span>
            <span>World updates</span>
          </div>
        </div>

        <div className="glass-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                type="text"
                id="firstName"
                className="input-base"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                className="input-base"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>PHONE NUMBER <span style={{ textTransform: 'none', color: 'var(--muted-silver)' }}>(Optional - for VIP drops and priority alerts)</span></span>
              </label>
              <input
                type="tel"
                id="phone"
                className="input-base"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '1.5rem' }}>
              <input 
                type="checkbox" 
                id="consent" 
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: '0.25rem', width: '18px', height: '18px', accentColor: 'var(--cosmic-violet)', cursor: 'pointer' }}
                required
              />
              <label htmlFor="consent" style={{ fontSize: '0.85rem', textTransform: 'none', color: 'var(--muted-silver)', fontWeight: 'normal', marginBottom: 0, cursor: 'pointer', lineHeight: '1.4' }}>
                I agree to receive updates from Fifth Dimension by email and optional SMS.
              </label>
            </div>

            {error && <p className="error-message" style={{ color: 'var(--subtle-crimson)', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{error}</p>}

            <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '0.5rem' }}>
              {loading ? 'PROCESSING...' : 'JOIN THE SIGNAL'} {!loading && <ArrowRight size={20} />}
            </button>

            <p className="trust-line">
              Early access to drops, event signals, music, and world updates. No noise.
            </p>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Entry;
