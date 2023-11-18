import { IMG_URL } from "../utility/constant";
// Hearder Component --  that hold the logo and nav bars
export const HeaderCom = () => {
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
        </ul>
      </div>
    </header>
  );
};

// export default HeaderCom;
