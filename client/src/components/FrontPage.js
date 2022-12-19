import { useState, useEffect } from "react";
import Form from "./Form";
import App from "../App";

const FrontPage = (props) => {
  const { verifyToken } = props;
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [username, setUsername] = useState(null); // add a state variable to store the username


  useEffect(() => {
    verifyToken().then((result) => {
      setIsTokenValid(result.isValid);
      setUsername(result.username); // set the username
    });
  }, [verifyToken]);

  return (
    <div className=" bg-black w-full h-screen flex">
      {username ? (
        <div className="flex flex-row absolute p-2 ml-3 mt-3">
          <p className="text-white">Signed in as {username}</p>
        </div>
      ) : (
        <div className="flex flex-row absolute p-2 ml-3 mt-3">
        <a href="/SignIn"
          onClick="window.location.href='/SignIn'"
          className="bg-transparent text-white py-2 px-3 mr-3 text-base hover:bg-white hover:bg-opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"
        >
          {" "}
          Sign in{" "}
        </a>
        <a href="/SignUp"
          className="border border-white bg-transparent text-white py-2 px-3 text-base hover:bg-white hover:bg-opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"
        >
          {" "}
          Sign up{" "}
        </a>
      </div>
      )}
      <div className="w-1/2 flex">
        <img className="object-cover h-screen select-none" src="/imgs/car3.png" />
        <div class="right-0 ml-8 w-0.5 h-screen bg-gradient-to-t from-black/60 via-white/60 to-black/60"></div>
      </div>

      <div className="flex items-justify w-1/2 items-center">
        <Form />
      </div>
    </div>
  );
};

export default FrontPage;
