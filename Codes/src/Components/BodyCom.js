import RescartCom from "./RescartCom";
// Importing useState from react by named_import.
import { useState } from "react";
// import resList from "../utility/mockData";
import resList from "../utility/mockData";

// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  // Local variable means this superpowerfull react variable work only this component.
  // Inisialy useState return a default value that assign in the variable.
  const [ListOFResturant, setListOFResturant] = useState(resList);
  const [SerchText, setSearchText] = useState("");
  // Normal JS Varibale declaration
  // let resList = [
  //   {
  //     info: {
  //       id: "340854",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "City Heart",
  //       areaName: "Janta Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.9,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "340855",
  //       name: "KFC",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "City Heart",
  //       areaName: "Janta Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.4,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "340856",
  //       name: "Dominoz",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "City Heart",
  //       areaName: "Janta Nagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="main-body-container">
      <div className="btn-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search Resturent"
          onChange={(e) => console.log(e.target.value)}
        />
        {/* Add button and onClick event on button */}
        {/* In react event same as JS it take a callback function. */}
        <button
          className="filter-btn"
          // Add onClick Handler
          // onClick={() => console.log("Filter button click")}

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
          //  This is not a good way. What i do if resturent is 100.
          /* <RescartCom resData={resList[0]} />
          <RescartCom resData={resList[1]} />
          <RescartCom resData={resList[2]} />
          <RescartCom resData={resList[3]} />
          <RescartCom resData={resList[4]} />
          */

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
