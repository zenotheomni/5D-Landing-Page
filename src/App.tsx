import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Instagram, Youtube } from 'lucide-react';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email && !phone) {
      setError('Please provide at least an email or phone number.');
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
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error joining the movement. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Error joining the movement. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {!submitted ? (
        <header className="hero">
          <div className="logo-container">
            <img src="/logo.png" alt="Fifth Dimension Logo" className="logo-image" />
            <div className="logo-text">FIFTH DIMENSION</div>
          </div>

          <div className="hero-content">
            <h1>Plead The Fifth</h1>
            <p>
              You are the co-creator of your reality.<br />
              Master your energy. Align your vibration.<br />
              Enter the FIFTH.
            </p>

            <div className="perks-list">
              <div className="perk-item">
                <span className="perk-emoji">✨</span>
                <span>Exclusive Drops</span>
              </div>
              <div className="perk-item">
                <span className="perk-emoji">🎵</span>
                <span>New Music</span>
              </div>
              <div className="perk-item">
                <span className="perk-emoji">🧥</span>
                <span>Limited Merch</span>
              </div>
            </div>

            <div className="glass-panel">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
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
                    <span>Phone Number <span style={{ textTransform: 'none' }}>(VIP text access)</span></span>
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

                {error && <p className="error-message" style={{ color: 'var(--subtle-crimson)', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '1rem' }}>{error}</p>}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'PROCESSING...' : 'ENTER THE FIFTH'} {!loading && <ArrowRight size={20} />}
                </button>

                <p className="trust-line">
                  Early access to drops, music, and exclusive releases. No noise.
                </p>
              </form>
            </div>
          </div>
        </header>
      ) : (
        <div className="intro-container">
          <div className="intro-header">
            <div className="success-icon-container">
              <div className="success-icon-glow"></div>
              <ShieldCheck size={64} color="var(--bone-white)" className="success-icon" />
            </div>
            <h1 className="success-headline">WELCOME TO THE FIFTH</h1>
            <p className="success-micro">SIGNAL RECEIVED.</p>
          </div>

          <section className="intro-section symbols-section delay-1">
            <h2>Brand Symbols</h2>
            <div className="symbol-grid">
              <div className="symbol-card">
                <div className="symbol-emoji">🖐️</div>
                <h3>The Signal</h3>
                <p>Represents identity and community. When the five is raised, it signals alignment with the FIFTH mindset — awareness, discipline, and evolution.</p>
              </div>
              <div className="symbol-card">
                <div className="symbol-emoji">💫</div>
                <h3>The Shooting Star</h3>
                <p>Represents the magic within us all. A reminder that we are the co-creators of our reality. The wish already exists. Your job is to align with it.</p>
              </div>
            </div>
          </section>

          <section className="intro-section code-section delay-2">
            <h2>The Fifth Code</h2>
            <div className="code-list-wrapper">
              <ul className="code-list">
                <li><span className="code-num">01</span><span className="code-text">You are the co-creator of your reality.</span></li>
                <li><span className="code-num">02</span><span className="code-text">Go within. Alignment starts there.</span></li>
                <li><span className="code-num">03</span><span className="code-text">Perception precedes reality.</span></li>
                <li><span className="code-num">04</span><span className="code-text">Energy. Frequency. Vibration.</span></li>
                <li><span className="code-num">05</span><span className="code-text">The wish already exists. Bring it to life.</span></li>
              </ul>
            </div>
          </section>

          <section className="intro-section media-section delay-3">
            <h2>FIFTHUATIONS</h2>
            <div
              className="youtube-wrapper"
              onClick={() => window.open('https://www.youtube.com/watch?v=KWJ0DUpHyL4&list=PLl3_JoLp_KwSCIj__YhkWZ_2daSGzh9cc', '_blank')}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/KWJ0DUpHyL4?list=PLl3_JoLp_KwSCIj__YhkWZ_2daSGzh9cc&autoplay=1&mute=1&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              ></iframe>
              <div className="yt-overlay">
                <Youtube size={32} color="var(--bone-white)" />
                <span>SUBSCRIBE ON YOUTUBE</span>
              </div>
            </div>
          </section>

          <section className="intro-section links-grid delay-4">
            <a href="https://5dimperial.com" target="_blank" rel="noopener noreferrer" className="imperial-preview">
              <div className="imperial-marquee">
                <div className="marquee-track">
                  <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
                  <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
                  <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
                  {/* Duplicate set for seamless looping */}
                  <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
                  <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
                  <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
                </div>
              </div>
              <div className="imperial-overlay"></div>
              <div className="imperial-content">
                <h3>FIFTH DIMENSION IMPERIAL</h3>
                <p>Explore the Archive. Step into the realm.</p>
                <span className="visit-link">Visit 5dimperial.com <ArrowRight size={16} /></span>
              </div>
            </a>

            <div className="social-tabs">
              <a href="https://instagram.com/jenks757" target="_blank" rel="noopener noreferrer" className="social-tab">
                <Instagram size={20} /> @jenks757
              </a>
              <a href="https://instagram.com/fifthdimensionimperial" target="_blank" rel="noopener noreferrer" className="social-tab">
                <Instagram size={20} /> @fifthdimensionimperial
              </a>
            </div>
          </section>

          <div className="intro-footer delay-5">
            <p className="success-closing">The Foundation is set. <span style={{ fontFamily: 'sans-serif' }}>🖐️💫</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
