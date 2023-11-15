import RescartCom from "./RescartCom";
// import resList from "../utility/mockData";

// Dummy data
let resList = [
  {
    info: {
      id: "340854",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "City Heart",
      areaName: "Janta Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      sla: {
        deliveryTime: 24,
      },
    },
  },
  {
    info: {
      id: "340855",
      name: "KFC",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "City Heart",
      areaName: "Janta Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      sla: {
        deliveryTime: 24,
      },
    },
  },
  {
    info: {
      id: "340856",
      name: "Dominoz",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "City Heart",
      areaName: "Janta Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      sla: {
        deliveryTime: 24,
      },
    },
  },
];

// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  return (
    <div className="main-body-container">
      <div className="btn-container">
        {/* Add button and onClick event on button */}
        {/* In react event same as JS it take a callback function. */}
        <button
          className="filter-btn"
          // Add onClick Handler
          // onClick={() => console.log("Filter button click")}

          // Add onClick for filter --> filter out over 4 rating resturent but UI will not change.
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4.0);
            console.log(resList);
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
          resList.map((resturent) => (
            <RescartCom key={resturent.info.id} resData={resturent} />
          ))
        }
      </div>
    </div>
  );
};

export default BodyCom;
