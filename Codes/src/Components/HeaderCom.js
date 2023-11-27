import { IMG_URL } from "../utility/constant";
import { useEffect, useState } from "react";
// Hearder Component --  that hold the logo and nav bars

export const HeaderCom = () => {
  // This is the special variable that is Statevariable.
  // Some rule for useState
  // 1. hook Never use outside the component.
  // 2. Try to put useState top of component.
  // 3. Never put useState inside loop, condition, function.
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // Some properties of useEffect
  // Case 1 -- Without dependecy Array useEffect call every render of component.
  // useEffect(() => {
  //   console.log("useEffect call each time when component render");
  // });

  // Case 2 -- With dependency Array -- useEffect call only once(first render)
  // useEffect(() => {
  //   console.log("useEffect call only fist render");
  // }, []);

  // Case 3 -- With dependency Array that have a dependency -- in this case useEffect call each time when that dependency change.
  useEffect(() => {
    console.log("useEffect call when dependency btnNameReact Change");
  }, [btnNameReact]);

  console.log("heading render");
  return (
    <header className="header">
      <div className="img-container">
        <img className="image" src={IMG_URL} />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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

// export default HeaderCom;
