import { CDN_URL } from "../utility/constant";

// Reasturant Cart Component that hold information about the reaturent
const RescartCom = (props) => {
  // console.log(props); // output - object
  // object destructuring
  const { resData } = props;

  // otional chaing and destructure it
  const { name, costForTwo, cuisines, avgRating, deliveryTime } = resData?.info;
  return (
    <div>
      <div className="res-cart-container">
        <img
          className="res-img"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="name">{name} </h3>
        <h4>{costForTwo.slice(0, 5)}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        <h5>{avgRating} stars</h5>
        <h5 className="cuisines">
          {cuisines.join(",").split(",", 3).join(",")}
        </h5>
      </div>
    </div>
  );
};

export default RescartCom;
