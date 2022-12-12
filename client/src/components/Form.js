import { useState } from "react";

const Form = () => {
const [id, setOrder] = useState(0)
  return (

    <div className="h-full w-full items-center">

      
      <form action="" className='w-2/3 flex flex-col justify-center items-center h-full'>
        <p className="text-white mb-5 tracking-widest">CARENTING</p>
        <input type="text" id="search" className='w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  p-2.5' placeholder="Search"></input>
        
        <div className="flex min-w-full">
          <input type="text" id="mark" className='basis-1/3 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5' placeholder="Mark"></input>
          <div className="basis-1/3"></div>
          <input type="text" id="mark" className='basis-1/3 justify-self-end mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5' placeholder="Make"></input>
        </div>

        <div className="flex min-w-full">
          <input type="text" id="location" className='basis-1/3 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5' placeholder="Location"></input>
          <div className="basis-1/3"></div>
          <input type="date" id="date" className='basis-1/3 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5'></input>
        </div>

      </form>
    </div>
  );
};

export default Form;