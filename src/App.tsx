import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Entry from './pages/Entry.tsx';
import Welcome from './pages/Welcome.tsx';
import LobbyPage from './pages/arcade/LobbyPage.tsx';
import CourtVisionPage from './pages/arcade/CourtVisionPage.tsx';
import FifthRunPage from './pages/arcade/FifthRunPage.tsx';
import ChallengePage from './pages/arcade/ChallengePage.tsx';
import KeyPage from './pages/arcade/KeyPage.tsx';
import './index.css';

function AppShell() {
  const { pathname } = useLocation();
  const isArcade = pathname.startsWith('/arcade');

  return (
    <div className="app-wrapper">
      {!isArcade && (
        <>
          <div className="ambient-glow glow-1"></div>
          <div className="ambient-glow glow-2"></div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/arcade" element={<LobbyPage />} />
        <Route path="/arcade/court-vision" element={<CourtVisionPage />} />
        <Route path="/arcade/fifth-run" element={<FifthRunPage />} />
        <Route path="/arcade/challenge/:id" element={<ChallengePage />} />
        <Route path="/arcade/key" element={<KeyPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
