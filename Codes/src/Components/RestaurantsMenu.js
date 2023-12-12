import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// The useParams hook is a React hook that allows you to access the dynamic parameters present in the current URL. These parameters are typically defined in the route path using placeholders like :id.
import { useParams } from "react-router-dom";

import { Menu_API } from "../utility/constant";

const RestaurantsMenu = () => {
  const [resItems, setResItems] = useState("");
  useEffect(() => {
    fetchResMenuData();
  }, []);

  // useParam() hook return id of restaurants
  const id = useParams();

  const fetchResMenuData = async () => {
    const data = await fetch(Menu_API + id.resId);
    const JsonData = await data.json();
    console.log(JsonData.data.cards);
    setResItems(JsonData);
  };

  //   recommended restaurant
  //   const recRes = resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  //   console.log(recRes);
  return resItems === "" ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="resName-container">
        <h1>{resItems.data.cards[0].card.card.info.name}</h1>
        <p>{resItems.data.cards[0].card.card.info.cuisines.join(",")}</p>
        <p>
          {resItems.data.cards[0].card.card.info.areaName +
            "," +
            resItems.data.cards[0].card.card.info.sla.lastMileTravel +
            " k.m"}
        </p>
      </div>
      <div className="recommededMenu-container">
        <h1>
          {
            resItems.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.title
          }
        </h1>
        <ul>
          {resItems.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item.card.info.id}>
                <h3>
                  {item.card.info.name + ":" + item.card.info.price / 100}
                </h3>
              </li>
            )
          )}
          {console.log(
            resItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]
              .card.card.itemCards
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
