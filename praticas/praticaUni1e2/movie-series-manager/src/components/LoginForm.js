import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleLogin = () => {
    
    if (!email || !isValidEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    }
    setEmailError('');
    if (!password) {
        setEmailError('Por favor, insira uma senha.');
        return;
      }

    onLogin({ email, password });

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          class="inputLogin"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          class="inputLogin"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
