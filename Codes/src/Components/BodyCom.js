import RescartCom, { Offers } from "./RescartCom";
import { useEffect, useState, useCallback, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Restaurants_API } from "../utility/constant";
import useStatus from "../utility/useStatus";
import UserContext from "../utility/UserContext";
// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  const [ListOFResturant, setListOFResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Without add this search hm after one search kewal output wale cards me hi search kr skte the.
  const [searchRes, setSearchRes] = useState([]);

  // Importing the custom hook that return current net status
  const currNetStatus = useStatus();

  // CALLING THE HOC THAT RETURN TOP REATED RESTAURANT
  const OffersOnRes = Offers(RescartCom);

  // Whenever state variable is change react reconciliation(re-render it).
  console.log("Rendered Every Change");

  const { loggedInUser, setUserName } = useContext(UserContext);

  // We use useEffect here bcz we want api calling after first render.
  useEffect(() => {
    // fetchData() calling.
    fetchData();
  }, []);

  // fetch api
  const fetchData = async () => {
    const res = await fetch(Restaurants_API);
    const Jsondata = await res.json();
    console.log(Jsondata);
    console.log(
      Jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    //Update the Resturants that come from API.
    setListOFResturant(
      Jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // setResturent card that come from API.
    setSearchRes(
      Jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Checking the net status.
  if (currNetStatus === false)
    return <h2>Opps!! Pls check the internet connection</h2>;
  // Instead of using if condition we can use ternary oprator.
  return ListOFResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        {/* Search box creating */}
        <input
          type="text"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search Resturent"
          value={searchText}
          // call setSearchText() on each change and it rerender component every change.
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* Serach a perticular resturent by its name */}
        <button
          className="mx-2 bg-red-500 text-white px-4 py-2 rounded-md"
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
          className="mx-2 bg-red-500 text-white px-4 py-2 rounded-md"
          // Add onClick for filter --> filter out over 4 rating resturent but UI will not change.
          onClick={() => {
            const filteredList = ListOFResturant.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList);
            // Fix the problem.
            // update serchres bcz res card render that compont below.
            setSearchRes(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
        <input
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {
          // update ListOFResturent with searchRes bcz hame kewal search text wale resturent hi chahiye.
          searchRes?.map((resturent) => (
            <Link
              key={resturent.info.id}
              to={"/restaurants/" + resturent.info.id}
              style={{ color: "black", textDecoration: "none" }}
            >
              {/* If restaurant have any offer then offersOnRes(HOC) Execute other wise RescartCom Executed*/}
              {resturent?.info?.aggregatedDiscountInfoV3 ? (
                <OffersOnRes resData={resturent} />
              ) : (
                <RescartCom key="resturent.info.id" resData={resturent} />
              )}
              {/* {resturent?.info?.avgRating > 4.2 ? (
                <TopRatedRes resData={resturent} />
              ) : (
                <RescartCom key="resturent.info.id" resData={resturent} />
              )} */}

              {/* <RescartCom resData={resturent} /> */}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default BodyCom;
