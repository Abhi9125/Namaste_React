import RescartCom from "./RescartCom";
// Importing useState/useEffect from react by named_import.
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  // useState() calling.
  // we do not need of dummy data.
  const [ListOFResturant, setListOFResturant] = useState([]);
  // const [SerchText, setSearchText] = useState("");

  // useEffect() calling -- it is a hook in react, it run after the render of component.
  // Syntex--> useEffect take two argument one is callback function and second is dpendency Array.
  // We use useEffect here bcz we want api calling after first render.
  useEffect(() => {
    // fetchData() calling.
    fetchData();
  }, []);

  // fetch api
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7498676&lng=76.64110939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const Jsondata = await res.json();
    console.log(Jsondata);
    console.log(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    //state change - rerender our app, bcz state is change.
    setListOFResturant(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Loading component until our API is not come.
  // if (ListOFResturant.length === 0) {
  //   return <h1>Loading....</h1>;
  // }

  // Instead of using above Loading ve use Simmer, Dummy Shimmer-card
  if (ListOFResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="main-body-container">
      <div className="btn-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search Resturent"
          // onChange={(e) => console.log(e.target.value)}
        />
        <button
          className="filter-btn"
          // Add onClick for filter --> filter out over 4 rating resturent but UI will not change.
          onClick={() => {
            const filteredList = ListOFResturant.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log(filteredList);
            // When this function call react Rerender it.
            setListOFResturant(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {
          // above this we do by for loop but instead of using for loop or any other loop we use Map().
          // update resList with ListOFResturent bcz now ListOFResturent is the array.
          ListOFResturant.map((resturent) => (
            <RescartCom key={resturent.info.id} resData={resturent} />
          ))
        }
      </div>
    </div>
  );
};

export default BodyCom;
