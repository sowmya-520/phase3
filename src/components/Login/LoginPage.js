import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './LoginSlice';
import './LoginPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const HandelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const error=useSelector(state=>state.auth.error)
  if (isAuthenticated) {
    navigate('/dashboard');
  }     

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && (
        <div className='error'>
          <h1>Invalid Credentials</h1>
        </div>
      )}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={HandelChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={HandelChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
