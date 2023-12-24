import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";
import { useState } from "react";

// This component use for showing all the category of the restaurant.
const RestaurantCategory = ({ data }) => {
  const [showAcoordian, setShowAccordian] = useState(false);
  console.log(data);
  // const toggleAccordian = () =>
  const toggleAccordian = () => {
    // console.log("clicked");
    setShowAccordian(!showAcoordian);
  };
  return (
    <div>
      {/* Accordian Items Header */}
      <div
        className="text-md  mx-1 my-2 bg-gray-200 shadow-md rounded-md"
        onClick={toggleAccordian}
      >
        <div className="flex justify-between">
          <span className="font-bold px-1 py-2">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="px-1 py-2">
            <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </div>
        {/* Accordian Items Body */}
        {/* Calling ItemList component for showing all the item in each category */}
        {showAcoordian && <ItemList itemsMenu={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
