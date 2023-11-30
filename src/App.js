// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/LoginComponent';
import Registration from '../src/components/RegistrationComponent';
// import ProtectedRoute from './components/ProtectedRoute';
import ProfileComponent from './components/Profile';
import DeviceComponent from './components/DeviceComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<ProfileComponent role="lev_engineer" info="this is owner" />}>
        </Route>
        <Route path="/profile/devices" element={<DeviceComponent role="lev_engineer" />} />
      </Routes>
    </Router>
  );
};

export default App;