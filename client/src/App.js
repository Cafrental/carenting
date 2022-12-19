import './App.css';
import { useState } from 'react';
import CarCards from './components/CarCards';
import FrontPage from './components/FrontPage';
import AddCarForm from './components/AddCarForm';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className='w-full font-MinionProMedium'>
      <FrontPage/>
      <SignUp/>
      <SignIn/>
      <AddCarForm/>
      <CarCards/>
    </div>
  )
}

export default App