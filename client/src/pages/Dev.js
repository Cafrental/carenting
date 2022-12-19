import Axios from 'axios';
import CarCards from '../components/CarCards';
import FrontPage from '../components/FrontPage';
import AddCarForm from '../components/AddCarForm';


const Dev = () => {

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }  

  async function verifyToken() {
    try {
      const token = getCookie('jwt');
      const response = await Axios.get('http://localhost:3001/verify-token', {
        headers: {
          'x-access-token': token
        }
      });
      const username = response.data.username; // retrieve the username from the response
      return { isValid: true, username }; // return the validation result and the username
    } catch (error) {
      return { isValid: false, username: null }; // return the validation result and a null username
    }
  }

  verifyToken();

  return (
    <div className='w-full font-MinionProMedium'>
      <FrontPage verifyToken={verifyToken} />
      <AddCarForm/>
      <CarCards/>
    </div>
  )
}

export default Dev