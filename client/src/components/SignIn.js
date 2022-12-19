import { useState } from 'react';
import axios from "axios";
import App from "../App";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const login = async () => {
      try {
        const res = await axios.post('http://localhost:3001/login', {
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
      <div className='flex m-3 justify-center'>
      <div>
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="User..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="Pass..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className='w-full border-2 border-black bg-black text-white m-1 rounded' onClick={login}> Sign In </button>
      </div>
    </div>
      

  );
};

export default SignIn;