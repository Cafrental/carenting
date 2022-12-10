import { useState } from "react";

const Card = () => {
const [id, setOrder] = useState(0)
  return (

    <div className="flex justify-center m-3" onClick={() => { setOrder('s')}}>
      <div className="border-solid border-2 border-black shadow-lg bg-white max-w-sm hover:scale-105 transition duration-500 cursor-pointer">
        <img className="" src="/imgs/miata.png" alt=""/>
        <div className="p-5">
        <p className="text-gray-900 text-xl font-medium mb-2">Mazda Miata</p>{/* tu dac propsy */}
        <p className="text-gray-900 text-md font-medium">2022</p>
        <p className="text-gray-900 text-md font-medium">Biaystok</p>
        </div>
      </div>
    </div>
  );
};

export default Card;