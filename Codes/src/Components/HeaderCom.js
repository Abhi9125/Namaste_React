import { IMG_URL } from "../utility/constant";
import { useState } from "react";
//Link component for link
import { Link } from "react-router-dom";
import useStatus from "../utility/useStatus";
const HeaderCom = () => {
  // This is the special variable that is Statevariable.
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const netStatus = useStatus();
  return (
    <header className="flex justify-between items-center bg-white shadow-md m-[2px]">
      <div className="p-2 w-20 rounded-md">
        <img src={IMG_URL} />
      </div>

      <div>
        <ul className="flex justify-between items-center text-lg ">
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            Online_Status : {netStatus === true ? "✅" : "❌"}
          </li>
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            {/* we do not use anchor tag bcz if we use anchor tag if referce hole app 
            Instead of using anchor we use Link component.
            */}
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            <Link to="/card">Card</Link>
          </li>
          <li className="mr-6 transition-colors duration-100 hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="mr-6 bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              //console.log(btnNameReact); //this console print same value in current state.
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default HeaderCom;
