import React, { useState } from 'react';
import './LoginComponent.css'; 
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API_URLs from '../common';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URLs.SERVER_URL}/api/user/login`, { email, password });
      console.log(response)
      localStorage.setItem('user', response.data);
      navigate('/profile')
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h4 className='appname'>IOT Device Management platform</h4>
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


