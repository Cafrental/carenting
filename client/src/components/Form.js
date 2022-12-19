import { useState } from "react";

const Form = () => {
  const [id, setOrder] = useState(0);
  return (
    <div className="h-full w-full items-center">
      <form
        action=""
        className="w-2/3 flex flex-col mt-8 items-center h-full mt-20"
      >
        <img class="w-2/12" src="/imgs/logo.svg" />
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
        ></input>

        <div className="flex min-w-full">
          <input
            type="text"
            id="mark"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Mark"
          ></input>
          <div className="basis-2/12"></div>
          <input
            type="text"
            id="mark"
            className="basis-5/12 justify-self-end mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Make"
          ></input>
        </div>

        <div className="flex min-w-full mt-4 mb-10">
          <input
            type="text"
            id="location"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Location"
          ></input>
          <div className="basis-2/12"></div>
          <input
            type="date"
            id="date"
            className="basis-5/12 mt-10 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2.5"
          ></input>
        </div>
        <input
          type="submit"
          value="Search"
          className="h-10 text-white text-base border border-color-white align-middle w-1/3 hover:bg-white hover:bg-opacity-10 transition-all duration-[250ms] ease-out group-hover:w-full"
        ></input>
      </form>
    </div>
  );
};

export default Form;

