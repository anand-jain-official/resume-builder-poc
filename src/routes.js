import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));

const RoutesComponent = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Suspense>
  </Router>
);

export default RoutesComponent;