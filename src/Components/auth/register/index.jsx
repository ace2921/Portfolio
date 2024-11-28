import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Contexts/authContext'; // Custom Auth Context for managing user state
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'; // Firebase function for creating users

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  
  const onSubmit = async (e) => {
    e.preventDefault();

   
    setErrorMessage('');

    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    try {
      setIsRegistering(true)
      await doCreateUserWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message || 'Failed to register');
    } finally {
      setIsRegistering(false);
    }
  };

  
  if (userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" disabled={isRegistering}>
          {isRegistering ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
