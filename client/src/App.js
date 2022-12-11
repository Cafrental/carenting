import './App.css';
import { useState } from 'react';
import CarCards from './components/CarCards';
import FrontPage from './components/FrontPage';
import AddCarForm from './components/AddCarForm';


function App() {

  return (
    <div className='w-full'>   
      <FrontPage/>
      <AddCarForm/>
      <CarCards/>
    </div>
  )
}

export default App