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
        <button className='w-full border-2 border-black bg-black text-white m-1 rounded' onClick={createUser}> Add a user </button>
      </div>
    </div>
      

  );
};

export default SignUp;