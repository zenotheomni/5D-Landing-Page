import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry.tsx';
import Welcome from './pages/Welcome.tsx';
import Lobby from './arcade/pages/Lobby.tsx';
import CourtVision from './arcade/pages/CourtVision.tsx';
import FifthRun from './arcade/pages/FifthRun.tsx';
import Challenge from './arcade/pages/Challenge.tsx';
import KeyLanding from './arcade/pages/KeyLanding.tsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/arcade" element={<Lobby />} />
          <Route path="/arcade/court-vision" element={<CourtVision />} />
          <Route path="/arcade/fifth-run" element={<FifthRun />} />
          <Route path="/arcade/challenge/:id" element={<Challenge />} />
          <Route path="/arcade/key" element={<KeyLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
