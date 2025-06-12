import './App.css';
import Home from './components/Home';
import MemoryLane from './components/MemoryLane';
import Moments from './components/Moments';
import Navigation from './components/Navigation';
import Wishes from './components/Wishes';
import usePageTracking from './components/usePageTracking';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PageTracker />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/memory" element={<MemoryLane />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
  );
}

// Component that uses the tracking hook (because hooks can't run outside Router)
function PageTracker() {
  usePageTracking();
  return null;
}

export default App;
