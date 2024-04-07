import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import Home component
import EventPage from './pages/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento/:id" element={<EventPage />} />
      </Routes>
    </Router>
  );
}


export default App;