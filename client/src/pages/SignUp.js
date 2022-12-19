import { useState } from 'react';
import Axios from "axios";
import App from "../App";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const createUser = () => {
      Axios.post("http://localhost:3001/createUser", {
        username,
        password
      }).then((response) => {alert(response.data)});
    };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-black">
      <img class="w-12 m-5" src="/imgs/logo.svg" />
      <div className="w-full p-10 m-auto bg-black lg:max-w-xl rounded">
        <h1 className="text-2xl text-center text-white">Sign Up</h1>
        <div className="mb-2">
          <label className="block text-sm text-white" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-zinc-500 focus:bg-white border"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm text-white" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mt-6 justify-center flex">
          <button
            className="w-1/3 px-4 py-2 tracking-wide text-white duration-200 transform border hover:bg-white hover:bg-opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"
            onClick={createUser}
          >
            Sign up
          </button>
        </div>
        <p className="mt-8 text-xs text-center text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-white hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
