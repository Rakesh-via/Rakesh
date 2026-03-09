import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RakeshHistory from './pages/RakeshHistory';
import HistoryBooks from './pages/HistoryBooks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RakeshHistory />} />
      <Route path="/rakesh-history" element={<RakeshHistory />} />
      <Route path="/history-books" element={<HistoryBooks />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;