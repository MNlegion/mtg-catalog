// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Additional Component Imports As Needed
// import Home from './components/Home';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import SignUpLogin from './components/auth/SignUpLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" component={SignUpLogin} />
        {/* <ProtectedRoute path="/home" component={Home} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;


