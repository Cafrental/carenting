import { useState, useEffect } from "react";
import App from "../App";

const FrontPage = (props) => {
  const { verifyToken } = props;
  const [username, setUsername] = useState(null); // add a state variable to store the username

  useEffect(() => {
    verifyToken().then((result) => {
      setUsername(result.username); // set the username
    });
  }, [verifyToken]);

  return (
    <div>
      {username ? (
        <div className="flex flex-row absolute p-2 ml-3 mt-3">
          <p className="text-white py-2 px-3 mr-3 text-base">Signed in as <b>{username}</b></p>
          <a href=""
          onClick={props.onLogout}
          className="bg-transparent text-white py-2 px-3 mr-3 text-base hover:bg-white hover:bg-opacity-20 transition-all duration-[250ms] ease-out group-hover:w-full"
          >          
          {" "}
          Sign Out{" "}</a>
        </div>
      ) : (
        <div className="flex flex-row absolute p-2 ml-3 mt-3">
        <a href="/SignIn"
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
    </div>
  );
};

export default FrontPage;
