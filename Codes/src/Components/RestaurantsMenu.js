import Shimmer from "./Shimmer";
import useRestaurantMenuAPIFetch from "../utility/useRestaurantMenuAPIFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RestaurantsMenu = () => {
  // useParam() hook return id of restaurants
  const { resId } = useParams();

  // State for Making toggle
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

  // Now we custom hook for fetch the data.
  const resItems = useRestaurantMenuAPIFetch(resId);

  if (resItems === "") return <Shimmer />;

  // Destructuring
  const { name, cuisines, areaName, avgRatingString, totalRatingsString } =
    resItems?.data?.cards[0]?.card?.card?.info;

  const { lastMileTravel } = resItems?.data?.cards[0]?.card?.card?.info?.sla;

  const { title, itemCards } =
    resItems.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  // Recommended restaurant items
  const recRes = resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  // Handle the toggle Recommended menu
  const toggleRecommendation = () => {
    // setIsRecommendationOpen(!isRecommendationOpen);
    isRecommendationOpen == false
      ? setIsRecommendationOpen(true)
      : setIsRecommendationOpen(false);
  };
  return (
    <div className="min-h-max w-1/3 bg-gray-200 mx-auto overflow-hidden">
      <div className="flex justify-between mb-2">
        <div>
          <h1 className="pl-1 text-lg font-bold">{name}</h1>
          <p className="pl-1 text-xs font-semibold">{cuisines.join(",")}</p>
          <p className="pl-1 pb-2 text-xs font-semibold">
            {areaName + "," + lastMileTravel + " k.m"}
          </p>
        </div>
        <div className="w-14 h-16 bg-white rounded-md mr-2 py-1 px-1">
          <p>
            {avgRatingString}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-xs">{totalRatingsString}</p>
        </div>
      </div>
      <div className="recommededMenu-container">
        <div className="flex justify-between mx-1">
          <h1 className="font-semibold">Recommendation</h1>
          <FontAwesomeIcon
            onClick={toggleRecommendation}
            className="cursor-pointer"
            icon={faAnglesDown}
          />
        </div>
        {isRecommendationOpen && (
          <ul className="pl-1">
            {itemCards?.map((item) => (
              <li key={item.card.info.id}>
                <div>
                  <h3>{item.card.info.name}</h3>
                  <h3>{item.card.info.price / 100}rs.</h3>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
