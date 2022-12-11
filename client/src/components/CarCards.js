import { useState, useEffect } from 'react';
import Axios from "axios";
import App from "../App";

const CarCards = () => {
const [id, setOrder] = useState(0)
const [listOfCars, setListOfCars] = useState([]);

useEffect(() => {
  Axios.get("http://127.0.0.1:3001/getCars").then((response) => {
    setListOfCars(response.data)
  })
}, [])

  return (
    <div className='carCards flex'>
    {listOfCars.map((car) =>{
      return (
        <div className="justify-center m-3" onClick={() => { setOrder(car._id)}}>
        <div className="border-solid border-2 border-black shadow-lg bg-white max-w-sm hover:scale-105 transition duration-500 cursor-pointer">
          <img className="" src={car.photoURL} alt={car.model}/>
          <div className="p-5">
          <p className="text-gray-900 text-xl font-medium mb-2">{car.make}</p>
          <p className="text-gray-900 text-md font-medium">{car.model}</p>
          <p className="text-gray-900 text-md font-medium">{car.year}</p>
          </div>
        </div>
      </div>
        )
    })}
    Chosen car id: {id}
  </div>


  );
};

export default CarCards;