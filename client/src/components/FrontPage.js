import { useState } from 'react';
import Form from './Form';
import App from "../App";

const FrontPage = () => {

  return (
    <div className=' bg-black w-full h-screen flex'>
      
      <div className='w-1/2 flex'>
        <img className='object-cover h-screen' src="/imgs/car3.png" />
        <div class="absolute top-0 right-0 bottom-0 left-0 w-5/12 h-full overflow-hidden bg-fixed bg-black opacity-25"></div>
        <div class="right-0 ml-8 w-0.5 h-screen bg-gradient-to-t from-black/60 via-white/60 to-black/60"></div>
      </div>
  
      <div className='flex items-justify w-1/2 items-center'>
          <Form/>
      </div>
    </div>

  );
};

//<button className='bg-transparent text-white p-1 rounded mr-3' onClick={[]}> Sign in </button>
//<button className='border border-white bg-transparent text-white p-1 rounded' onClick={[]}> Sign up </button>
export default FrontPage;