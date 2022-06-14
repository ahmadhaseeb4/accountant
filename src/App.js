import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './pages/Index/Index';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Company XYZ</h3>
      </div>
      <div className="main">
        <div className="left">
          <h1 className="welcome">Welcome</h1>
          <Navbar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/customers" element={<h1>Customers</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
