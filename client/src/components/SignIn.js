import { useState } from 'react';
import Axios from "axios";
import App from "../App";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const login = async () => {
      try {
        const res = await Axios.post('http://localhost:3001/login', {
          username,
          password
        }).then((response) => {
          if (response.data.token) {
            document.cookie = `jwt=${response.data.token}`;
          } else {
            alert(response.data);
          }
        });
      } catch (err) {
        alert(err);
      }
    };

    return (
<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
  <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-blue-600 underline">Sign In</h1>
    <div className="mb-2">
      <label className="block text-sm font-semibold text-gray-800" htmlFor="username">Username</label>
      <input
        type="text"
        className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-semibold text-gray-800" htmlFor="password">Password</label>
      <input
        type="password"
        className="block w-full px-4 py-2 mt-2 text-blue-600 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
    </div>
    <div className="mt-6">
      <button
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        onClick={login}
      >
        Sign In
      </button>
    </div>
    <p className="mt-8 text-xs font-light text-center text-gray-700">
      Don't have an account?{' '}
      <a href="#" className="font-medium text-blue-700 hover:underline">Sign up</a>
    </p>
  </div>
</div>
      

  );
};

export default SignIn;