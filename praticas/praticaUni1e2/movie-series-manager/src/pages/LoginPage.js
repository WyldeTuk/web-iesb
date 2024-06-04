import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    onLogin(userData);
    navigate('/home'); 
  };

  return (
    <div class="loginP">
      <h1>Bem Vindo!</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
