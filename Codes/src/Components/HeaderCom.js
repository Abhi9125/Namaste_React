import { IMG_URL } from "../utility/constant";
import { useState } from "react";
//Link component for link
import { Link } from "react-router-dom";

const HeaderCom = () => {
  // This is the special variable that is Statevariable.
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <header className="header">
      <div className="img-container">
        <img className="image" src={IMG_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* we do not use anchor tag bcz if we use anchor tag if referce hole app 
            Instead of using anchor we use Link component.
            */}
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <button
            className="login-btn"
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
