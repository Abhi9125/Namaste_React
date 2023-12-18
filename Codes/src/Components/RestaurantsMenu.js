import Shimmer from "./Shimmer";
import useRestaurantMenuAPIFetch from "../utility/useRestaurantMenuAPIFetch";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  // useParam() hook return id of restaurants
  const { resId } = useParams();

  // Now we custom hook for fetch the data.
  const resItems = useRestaurantMenuAPIFetch(resId);

  if (resItems === "") return <Shimmer />;

  // Destructuring
  const { name, cuisines, areaName } =
    resItems?.data?.cards[0]?.card?.card?.info;

  const { lastMileTravel } = resItems?.data?.cards[0]?.card?.card?.info?.sla;

  const { title, itemCards } =
    resItems.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // recommended restaurant
  const recRes = resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div className="menu-container">
      <div className="resName-container">
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <p>{areaName + "," + lastMileTravel + " k.m"}</p>
      </div>
      <div className="recommededMenu-container">
        <h1>{title}</h1>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              <h3>{item.card.info.name + ":" + item.card.info.price / 100}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
