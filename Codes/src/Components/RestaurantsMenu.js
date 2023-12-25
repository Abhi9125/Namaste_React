import Shimmer from "./Shimmer";
import useRestaurantMenuAPIFetch from "../utility/useRestaurantMenuAPIFetch";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantsMenu = () => {
  // useParam() hook return id of restaurants
  const { resId } = useParams();

  // Make state varibale to hold the state of the index which intex show.
  const [showIndex, setShowIndex] = useState(0);

  // Now we custom hook for fetch the data.
  const resItems = useRestaurantMenuAPIFetch(resId);

  if (resItems === "") return <Shimmer />;

  // Destructuring
  const { name, cuisines, areaName, avgRatingString, totalRatingsString } =
    resItems?.data?.cards[0]?.card?.card?.info;

  const { lastMileTravel } = resItems?.data?.cards[0]?.card?.card?.info?.sla;

  // const { title, itemCards } =
  //   resItems.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  // console.log(resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  // Filtring the different category Items like reccomended, other things
  const itemCategory =
    resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (items) =>
        items?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCategory);

  return (
    <div className="min-h-max w-5/12 mx-auto overflow-hidden">
      {/* This div hold the restaurant name and address */}
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

      {/*  Building the Accordian for different category */}
      {/* RestaurantCategory componnet is controlled component bcz it conntrolled by its parent RestaurantMenu */}
      {itemCategory.map((differentCategory, index) => (
        <RestaurantCategory
          key={differentCategory.card.card.title}
          data={differentCategory?.card?.card}
          showAccordion={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
