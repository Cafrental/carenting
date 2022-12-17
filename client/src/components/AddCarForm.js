import { useState, useEffect } from 'react';
import Axios from "axios";
import App from "../App";


const AddCarForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [license, setLicense] = useState("");
  const [photoURL, setPhotoURL] = useState("");

const createCar = () => {
  Axios.post("http://localhost:3001/createCar", {
    make,
    model,
    year,
    license,
    photoURL
  }).then((response) => {alert("aaa")});
};

  return (
    <div className='flex m-3 justify-center'>
      <div>
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="Make..."
          onChange={(event) => {
            setMake(event.target.value);
          }}
        />
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="Model..."
          onChange={(event) => {
            setModel(event.target.value);
          }}
        />
        <input className='border-2 border-black rounded m-1'
          type="number"
          placeholder="Year..."
          onChange={(event) => {
            setYear(event.target.value);
          }}
        />
        <br/>
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="License..."
          onChange={(event) => {
            setLicense(event.target.value);
          }}
        />
        <input className='border-2 border-black rounded m-1'
          type="text"
          placeholder="Photo(/imgs/file.png)..."
          onChange={(event) => {
            setPhotoURL(event.target.value);
          }}
        />
        <button className='w-full border-2 border-black bg-black text-white m-1 rounded' onClick={createCar}> Add a car </button>
      </div>
    </div>
  );
};

export default AddCarForm;