import { useState, useEffect } from "react";
import Axios from "axios";

const Form = (props) => {
  const [cars, setCars] = useState([]);

  const [like, setLike] = useState('');
  const [Make, setMake] = useState(''); 
  const [Model, setModel] = useState(''); 
  const [Location, setLocation] = useState(''); 
  const [Date, setDate] = useState(''); 

  async function getCars() {
    try {
      const response = await Axios.get("http://localhost:3001/getCars", {
        params: {
          make: Make,
          model: Model
        }
      });
      setCars(response.data);
      props.setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect( () => {
    getCars();
  }, [])

  return (
    <div className="flex items-justify w-1/2 items-center">
      <div className="h-full w-full items-center">
      <div
        action=""
        className="w-2/3 flex flex-col mt-8 items-center h-full mt-20"
      >
        <img class="w-2/12 select-none" src="/imgs/logo.svg" />
        <p
          className="tracking-big font-MinionProBoldCond text-white mt-8 mb-2 text-sm"
          letter
        >
          CARENTING
        </p>
        <input
          type="text"
          id="search"
          className="mt-6 mb-3 w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  p-2.5"
          placeholder="Search"
          onChange={setLike}
        ></input>

        <div className="flex min-w-full">
          <input
            type="text"
            id="Make"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Make"
            onChange={(event) => setMake(event.target.value)}
            ></input>
          <div className="basis-2/12"></div>
          <input
            type="text"
            id="Model"
            className="basis-5/12 justify-self-end mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Model"
            onChange={(event) => setModel(event.target.value)}
            ></input>
        </div>

        <div className="flex min-w-full mt-4 mb-10">
          <input
            type="text"
            id="location"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Location"
            onChange={setLocation}
          ></input>
          <div className="basis-2/12"></div>
          <input
            type="date"
            id="date"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            onChange={setDate}
          ></input>
        </div>
        <button
          className="h-10 text-white text-base border border-color-white align-middle w-1/3 hover:bg-white hover:bg-opacity-10 transition-all duration-[250ms] ease-out group-hover:w-full"
          onClick={getCars}
        >Search</button>
        </div>
    </div>
    </div>
  );
};

export default Form;
