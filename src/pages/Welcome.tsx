import { ArrowRight, Instagram, Youtube } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <h1 className="success-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--bone-white)' }}>WELCOME TO THE FIFTH</h1>
        <p className="success-subtitle" style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--muted-silver)' }}>You found this for a reason.</p>
        <p className="success-message" style={{ fontSize: '1.1rem', margin: '0 auto', maxWidth: '400px', lineHeight: '1.6' }}>This is The Foundation.<br />Most people won’t understand this yet.</p>
        <p className="success-micro" style={{ color: 'var(--cosmic-violet)', fontWeight: 'bold', marginTop: '2rem', fontSize: '1rem' }}>We in the FIFTH 🖐🏽💫</p>
      </div>

      <section className="intro-section symbols-section delay-1">
        <h2>THE SIGNAL</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-silver)', marginBottom: '2rem' }}>Symbols of the wave.</p>
        <div className="symbol-grid">
          <div className="symbol-card">
            <div className="symbol-emoji">🖐🏽</div>
            <h3>THE FIVE</h3>
            <p>A signal. A mindset. A reminder that we in the FIFTH.</p>
          </div>
          <div className="symbol-card">
            <div className="symbol-emoji">💫</div>
            <h3>THE SHIFT</h3>
            <p>Momentum, motion, and the energy to become more.</p>
          </div>
        </div>
      </section>

      <section className="intro-section code-section delay-2">
        <h2>THE FIFTH CODE</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-silver)', marginBottom: '2rem' }}>A few rules for those who get it.</p>
        <div className="code-list-wrapper">
          <ul className="code-list">
            <li><span className="code-num">01</span><span className="code-text">PERCEPTION PRECEDES REALITY.</span></li>
            <li><span className="code-num">02</span><span className="code-text">FEAR IS ILLUSION.</span></li>
            <li><span className="code-num">03</span><span className="code-text">ENERGY. FREQUENCY. VIBRATION.</span></li>
            <li><span className="code-num">04</span><span className="code-text">TRIGGERS ARE TEACHERS.</span></li>
            <li><span className="code-num">05</span><span className="code-text">YOU ATTRACT WHAT YOU ARE.</span></li>
          </ul>
        </div>
      </section>

      <section className="intro-section media-section delay-3">
        <h2>THE ENERGY</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-silver)', marginBottom: '2rem' }}>Feel it first. Understand it later.</p>
        <div
          className="youtube-wrapper"
          style={{ height: 'clamp(300px, 45vw, 520px)', cursor: 'default' }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoseries?list=PLl3_JoLp_KwSCIj__YhkWZ_2daSGzh9cc&autoplay=1&mute=1&vq=hd1080"
            title="YouTube playlist player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="intro-section links-grid delay-4">
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>TAP INTO THE MOVEMENT</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-silver)', marginBottom: '2.5rem' }}>See more of the world behind the signal.</p>
        
        <div className="social-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <a href="https://instagram.com/jenks757" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', maxWidth: '400px' }}>
            <Instagram size={20} /> @jenks757 Instagram
          </a>
          <a href="https://youtube.com/@jenks757" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', maxWidth: '400px' }}>
            <Youtube size={20} /> @jenks757 YouTube
          </a>
          <a href="https://instagram.com/fifthdimensionimperial" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', maxWidth: '400px' }}>
            <Instagram size={20} /> @fifthdimensionimperial Instagram
          </a>
        </div>
      </section>

      <section className="intro-section links-grid delay-5">
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>ENTER THE WORLD</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-silver)', marginBottom: '2.5rem' }}>Explore the archive. Step into the Fifth.</p>

        <a href="https://5dimperial.com" target="_blank" rel="noopener noreferrer" className="imperial-preview">
          <div className="imperial-marquee">
            <div className="marquee-track">
              {/* Set 1 */}
              <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
              <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
              <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
              {/* Set 2 */}
              <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
              <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
              <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
              {/* Set 3 */}
              <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
              <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
              <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
              {/* Set 4 */}
              <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
              <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
              <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
              {/* Set 5 */}
              <img src="/hoodie.jpeg" alt="5D Imperial Hoodie" className="marquee-img" />
              <img src="/shorts.jpeg" alt="5D Imperial Shorts" className="marquee-img" />
              <img src="/shirt.jpeg" alt="5D Imperial Shirt" className="marquee-img" />
              {/* Set 6 */}
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
      </section>

      <div className="intro-footer delay-5" style={{ textAlign: 'center', marginTop: '3rem', paddingBottom: '3rem' }}>
        <p className="success-closing" style={{ fontSize: '1.1rem', color: 'var(--muted-silver)', marginBottom: '1rem', lineHeight: '1.6' }}>
          Not everything is meant for everyone.<br/>
          This is only the beginning.
        </p>
        <p style={{ color: 'var(--cosmic-violet)', fontWeight: 'bold', fontSize: '1.1rem' }}>We in the FIFTH 🖐🏽💫</p>
      </div>
    </div>
  );
};

export default Welcome;
