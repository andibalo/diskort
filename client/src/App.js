import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, Login, Register } from './page';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
