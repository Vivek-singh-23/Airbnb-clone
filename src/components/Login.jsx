import React, { useState, useContext } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password });
      setUser(data);
      setRedirect(true);
    } catch (e) {
      console.log('Data not posted');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow mt-10 md:mt-[15vh] px-4">
        <h1 className="text-4xl text-center mb-8">Login</h1>
        <form className="w-full max-w-md bg-white p-8 shadow-md rounded-lg" onSubmit={handleLoginSubmit}>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mb-4 w-full px-3 py-2 border rounded-md"
            placeholder="Enter your Email here"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mb-6 w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password here"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-200">
            Login
          </button>

          <div className="text-center text-gray-500 mt-4">
            Don't have an account? <Link className="text-blue-500 underline" to={'/register'}>Sign Up Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
