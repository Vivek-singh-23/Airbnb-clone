import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });

      alert('Registration Successful');
    } catch (e) {
      alert('Registration Failed');
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow mt-10 md:mt-[15vh] px-4">
        <h1 className="text-4xl text-center mb-8">Sign Up</h1>
        <form className="w-full max-w-md bg-white p-8 shadow-md rounded-lg" onSubmit={registerUser}>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 px-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mb-4 w-full px-3 py-2 border rounded-md"
            placeholder="Enter your name here"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 px-3">
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

          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 px-3">
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
            Submit
          </button>

          <div className="text-center text-gray-500 mt-4">
            Already have an account? <Link className="text-blue-500 underline" to="/login">Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
