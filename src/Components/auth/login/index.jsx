import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../Contexts/authContext';

const Login = () => {
  const { userLoggedIn } = useAuth(); // Check if the user is already logged in

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission for email/password login
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message before attempting login

    try {
      if (!isSigningIn) {
        setIsSigningIn(true);
        await doCreateUserWithEmailAndPassword(email, password); // Sign in using email and password
      }
    } catch (error) {
      setErrorMessage(error.message || 'Failed to sign in');
    } finally {
      setIsSigningIn(false);
    }
  };

  // Handle Google Sign-In
  const onGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      if (!isSigningIn) {
        setIsSigningIn(true);
        await doSignInWithGoogle(); // Sign in using Google
      }
    } catch (error) {
      setErrorMessage(error.message || 'Failed to sign in with Google');
    } finally {
      setIsSigningIn(false);
    }
  };

  // Redirect authenticated users to the homepage
  if (userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 font-bold mb-1">Email</label>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 font-bold mb-1">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {errorMessage && (
          <span className="block text-red-600 font-bold text-sm">{errorMessage}</span>
        )}

        <button
          type="submit"
          disabled={isSigningIn}
          className={`w-full px-4 py-2 text-white font-medium rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50`}
        >
          {isSigningIn ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <p className="text-center text-sm mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>

      <div className="flex items-center mt-6">
        <div className="border-b w-full"></div>
        <span className="mx-2 text-gray-500 font-bold">OR</span>
        <div className="border-b w-full"></div>
      </div>

      <button
        disabled={isSigningIn}
        onClick={onGoogleSignIn}
        className="w-full px-4 py-2 mt-4 text-white font-medium rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-50"
      >
        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
      </button>
    </div>
  );
};

export default Login;
