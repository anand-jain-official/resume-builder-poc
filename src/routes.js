import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PrintPreview from './pages/PrintPreview.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));

const RoutesComponent = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/print-preview" element={<PrintPreview />}/>
        <Route path="/" element={<Home />}/>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Suspense>
  </Router>
);

export default RoutesComponent;