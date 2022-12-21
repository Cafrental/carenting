import Axios from 'axios';
import { useState, useEffect } from 'react';
import CarCards from '../components/CarCards';
import FrontPage from '../components/FrontPage';
import Form from "../components/Form";


const App = () => {

  const [cars, setCars] = useState([]);

  function getCookie(name) {
    try{
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    } catch (error) {
      return error;
    }
  }  

  function setCookie(name, value, expirationDate) {
    const cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookie;
  }

  async function verifyToken() {
    try {
      const token = getCookie('jwt');
      const response = await Axios.get('http://localhost:3001/verify-token', {
        headers: {
          'x-access-token': token
        }
      });
      const username = response.data.username;
      return { isValid: true, username };
    } catch (error) {
      return { isValid: false, username: null };
    }
  }

  async function logout() {
    try {
      const jwt = getCookie('jwt');
      setCookie('jwt', '', new Date(0));
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-full font-MinionProMedium'>
      <div className=" bg-black w-full h-screen flex">
        <FrontPage verifyToken={verifyToken} onLogout={logout} />
        <Form setCars={setCars} />
      </div>
      <CarCards cars={cars}/>
    </div>
  )
}

export default App