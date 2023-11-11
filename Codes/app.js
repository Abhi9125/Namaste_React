import React from "react";
import ReactDOM from "react-dom/client";

/*Learning in this episode 4, part - 1
- make header component 
- make body componet 
- make resturant cart 
- how to give inline styling in react
*/

/*
- Header
  - Logo
  - nav bar
- Body
 - search 
 - resturent container 
   - resturant carts 
     - Img 
     - Name of res, Star Rating, cuisines, etc.
- Footer 
  - Copyright 
  - Links 
  - Address
  - contact
*/

// Hearder Component --  that hold the logo and nav bars
const HeaderCom = () => {
  return (
    <header className="header">
      <div className="img-container">
        <img
          className="image"
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
        />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

// Reasturant Cart Component that hold information about the reaturent
const RescartCom = () => {
  return (
    <div>
      <div className="res-cart-container">
        <img
          className="res-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/u3ubwcgga6rr9jdxxobx"
        />
        <h3 className="name">Burger King</h3>
        <h4 className="cuisines">Burger,American</h4>
        <h4>4.2</h4>
        <h4>38 mintues</h4>
      </div>
    </div>
  );
};

// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  return (
    <div className="main-body-container">
      <div className="search-container">Search</div>
      <div className="res-container">
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
        <RescartCom />
      </div>
    </div>
  );
};

// App component
const AppContainer = () => {
  return (
    <div>
      {" "}
      <HeaderCom />
      <BodyCom />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppContainer />);
