import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './Register';
import Village from './village';
import VillageRedirect from  './VillageRedirect';
import VerifyOtp from './verify-otp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/village/:villageId" element={<Village />} />
      <Route path="/villageRedirect" element={<VillageRedirect />} /> {/* Add the redirect route */}
      <Route path="/verify-otp" element={<VerifyOtp />} />
    </Routes>
  );
}

export default App;