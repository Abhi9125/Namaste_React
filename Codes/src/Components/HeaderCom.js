import { IMG_URL } from "../utility/constant";
import { useState } from "react";
// Hearder Component --  that hold the logo and nav bars
export const HeaderCom = () => {
  // this is normal js variable.
  // let btnName = "Login";
  // This is the special variable that is Statevariable.
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <header className="header">
      <div className="img-container">
        <img className="image" src={IMG_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact); //this console print same value in current state.
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </header>
  );
};

// export default HeaderCom;
