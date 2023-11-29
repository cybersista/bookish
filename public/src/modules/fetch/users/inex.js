import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../modules/fetch/user';
import Navbar from "../components/Navbar.jsx";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      const userRole = data.isAdmin ? 'admin' : 'member';

      localStorage.setItem('token', data.token);

      // Redirect based on user role
      if (userRole === 'admin') {
        navigate('/dashboard'); // Redirect to the admin dashboard
      } else {
        navigate('/homepage'); // Redirect to the member homepage
      }

    } catch (error) {
      console.error('Login Error:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        {/* ... (your existing JSX code) */}
        <form className="space-y-4 md:space-y-6" action="#">
          {/* ... (your existing form inputs) */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign in
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {/* ... (your existing JSX code) */}
        </form>
      </section>
    </>
  );
};

export default Login;
