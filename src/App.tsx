import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './pages/Entry.tsx';
import Welcome from './pages/Welcome.tsx';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
