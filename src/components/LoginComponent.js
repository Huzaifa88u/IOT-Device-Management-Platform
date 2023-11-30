import React, { useState } from 'react';
import './LoginComponent.css'; 
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/user/login', { email, password });
      console.log(response)
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      <Navigate to="/profile"/>
      // Redirect to profile page based on user role
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h4 className='app-name'>IOT_Device_Management_platform</h4>
      <h2 className='login-header'>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='button-style'>
        <button onClick={handleLogin}>Login</button>
        </div>
        <div className='switch-login'>
        <p>Dont have an account?<Link to="/register"> Sign Up </Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;


