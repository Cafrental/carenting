import { useState, useEffect } from "react";
import Axios from "axios";
import App from "../App";

const CarCards = (props) => {
  const [[id, make, model, photoURL, year], setClicked] = useState([]);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid grid-cols-3 gap-8 m-8">
        {props.cars.map((car) => {
          return (
            <div
              className="justify-center"
              onClick={() => {
                setClicked([
                  car._id,
                  car.make,
                  car.model,
                  car.photoURL,
                  car.year,
                ]);
              }}
            >
              <div className="h-full border-solid border-2 border-gray-500 drop-shadow-lg bg-white hover:scale-105 transition duration-500 cursor-pointer">
                <img className="" src={car.photoURL} alt={car.model} />
                <div className="p-5">
                  <p className="text-gray-900 text-xl font-medium mb-2">
                    {car.make} {car.model}
                  </p>
                  <p className="text-gray-600 text-md font-medium">
                    {car.year}
                  </p>
                  <p className="text-gray-600 text-md font-medium">Location</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {make && (
        <div className="justify-center m-8">
          <div className="h-full border-solid border-2 border-black drop-shadow-lg bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="p-5">
              <button
                className="border-2 border-black bg-transparent text-xl font-medium text-gray-900 text-black p-1 rounded"
                onClick={[]}
              >
                {" "}
                Order{" "}
              </button>
            </div>
            <img className="" src={photoURL} alt={model} />
            <div className="p-5">
              <p className="text-gray-900 text-xl font-medium mb-2">
                {make} {model} {year}
              </p>
              <p className="text-gray-600 text-xl font-medium">
                Location: Bialystok
              </p>
              <p className="text-gray-600 text-xl font-medium">
                Price: 100zl/km
              </p>
              <p className="text-gray-600 text-xl font-medium">
                Availability: Available
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCards;
