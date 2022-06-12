import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import * as DataDogRUM from '@datadog/browser-rum';
import App from './App';

DataDogRUM.init({
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
DataDogRUM.startSessionReplayRecording();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
