import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAdmin } from '../../modules/fetch/admins/users';

const RegisterAdminPages = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [levelUser, setlevelUser] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerAdmin({ email, password, levelUser });
      // Redirect to login page after successful registration
      navigate('/admins/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@mail"
              className="mt-1 p-2 w-full border border-black rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-black rounded-md"
              placeholder="****"
            />
          </div>
          <div>
            <label htmlFor="levelUser" className="block text-sm font-medium text-gray-700">
              Level User<span className="text-red-500">*</span>
            </label>
            <input
              id="levelUser"
              name="levelUser"
              type="levelUser"
              autoComplete="current-password"
              required
              value={levelUser}
              onChange={(e) => setlevelUser(e.target.value)}
              className="mt-1 p-2 w-full border border-black rounded-md"
              placeholder= "admin"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#858585] hover:bg-[#BBAFAF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAdminPages;