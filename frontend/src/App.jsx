import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './Register';
import Village from './village';
import VillageRedirect from  './VillageRedirect';
import VerifyOtp from './verify-otp';
import Infrastructure from './infrastructure';
import IncidentReport from './incidentReport';
import Services from './service';
import Service1 from './service1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/village/:villageId" element={<Village />} />
      <Route path="/villageRedirect" element={<VillageRedirect />} /> {/* Add the redirect route */}
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/incident" element={<IncidentReport />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/service" element={<Services />} />
      <Route path="/services/1" element={<Service1 />} />

    </Routes>
  );
}

export default App;
