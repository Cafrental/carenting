import { useState } from 'react';
import App from "../App";

const FrontPage = () => {

  return (
    <div className='bg-black w-full h-screen flex mb-5'>
    <div className='w-1/2 flex'>
      <img className='object-cover h-screen' src="/imgs/car3.png" />
      <div class="absolute top-0 right-0 bottom-0 left-0 w-1/2 h-full overflow-hidden bg-fixed bg-black opacity-25"></div>
      <div class="right-0 ml-8 w-0.5 h-screen bg-gradient-to-t from-black/60 via-white/60 to-black/60"></div>
    </div>

    <div className='w-1/2 grid grid-rows-4 grid-cols-2 place items-center'>
      <div>
        <form action="" className=''>
          <input type="text" id="search" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="John"></input>
        </form>
      </div>
    </div>
  </div>  


  );
};

export default FrontPage;