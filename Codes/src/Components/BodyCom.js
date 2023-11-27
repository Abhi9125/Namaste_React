import RescartCom from "./RescartCom";
// Importing useState/useEffect from react by named_import.
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  // useState() calling.
  // we do not need of dummy data.
  const [ListOFResturant, setListOFResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Without add this seachres hm after one search kewal output wale cards me hi search kr skte the.
  const [searchRes, setSearchRes] = useState([]);

  // Whenever state variable is change react reconciliation(re-render it).
  console.log("Rendered Every Change");

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
    //Update the Resturants that come from API.
    setListOFResturant(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // setResturent card that come from API.
    setSearchRes(
      Jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // Instead of using if condition we can use ternary oprator.
  return ListOFResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body-container">
      <div className="btn-container">
        {/* Search box creating */}
        <input
          type="text"
          className="search-box"
          placeholder="Search Resturent"
          value={searchText}
          // call setSearchText() on each change and it rerender component every change.
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* Serach a perticular resturent by its name */}
        <button
          className="search-btn"
          onClick={() => {
            // search resturent from all resturent.
            const searchRes = ListOFResturant.filter(
              // (res) => res?.info?.name === searchText  //This caseSensitive
              (res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) //this is not caseSensitive.
            );
            // update searchRes resturent after click.
            setSearchRes(searchRes);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          // Add onClick for filter --> filter out over 4 rating resturent but UI will not change.
          onClick={() => {
            const filteredList = ListOFResturant.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log(filteredList);
            // Fix the problem.
            // update serchres bcz res card render that compont below.
            setSearchRes(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {
          // update ListOFResturent with searchRes bcz hame kewal search text wale resturent hi chahiye.
          searchRes.map((resturent) => (
            <RescartCom key={resturent.info.id} resData={resturent} />
          ))
        }
      </div>
    </div>
  );
};

export default BodyCom;
