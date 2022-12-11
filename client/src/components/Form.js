import { useState } from "react";

const Form = () => {
const [id, setOrder] = useState(0)
  return (

    <div className="justify-center">
      <form action="" className=''>
        <input type="text" id="search" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 ' placeholder="Search"></input>
      </form>
    </div>
  );
};

export default Form;