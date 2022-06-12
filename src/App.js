import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { datadogRum } from '@datadog/browser-rum';
import Navbar from './components/Navbar/Navbar';
import Index from './pages/Index/Index';

function App() {
  const func = () => {
    datadogRum.init({
      applicationId: '6daecd2d-8edd-4222-8811-e5e6074e4821',
      clientToken: 'pubafb549fcc3c4b3f9e2d859c8747448f9',
      site: 'datadoghq.com',
      service: 'accountant',

      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sampleRate: 100,
      premiumSampleRate: 100,
      trackInteractions: true,
      defaultPrivacyLevel: 'mask-user-input',
    });
    datadogRum.startSessionReplayRecording();
  };

  func();

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
