import './App.css';
import Home from './components/Home';
import MemoryLane from './components/MemoryLane';
import Moments from './components/Moments';
import Navigation from './components/Navigation';
import Wishes from './components/Wishes';
import usePageTracking from './components/usePageTracking';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  usePageTracking();
  return (
    <Router>
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

export default App;
