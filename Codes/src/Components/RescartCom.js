import { CDN_URL } from "../utility/constant";

// Reasturant Cart Component that hold information about the reaturent
const RescartCom = (props) => {
  // console.log(props); // output - object
  // object destructuring
  const { resData } = props;

  // otional chaing and destructure it
  const { name, costForTwo, cuisines, avgRating, deliveryTime } = resData?.info;
  return (
    <div className="mt-8">
      <div className="w-60 h-80 bg-white rounded-md shadow-md p-4 m-4 transition-transform duration-300 overflow-hidden hover:scale-105 hover:shadow-lg">
        <img
          className="w-full h-40 object-cover rounded-md mb-4"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="text-xl font-semibold mb-1 overflow-hidden truncate">
          {name}{" "}
        </h3>
        <div className="flex justify-items-start">
          <h4 className="text-base font-bold text-gray-600 m-1">
            {avgRating}⭐
          </h4>
          <h4 className="text-base text-gray-600 m-1">
            {resData.info.sla.deliveryTime} min
          </h4>
        </div>
        <h4 className="text-lg text-gray-600 m-1">{costForTwo}</h4>
        <h5 className="text-sm text-black ">
          {cuisines.join(",").split(",", 3).join(",")}
        </h5>
      </div>
    </div>
  );
};

export default RescartCom;
