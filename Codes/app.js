import React from "react";
import ReactDOM from "react-dom/client";

/*Learning in this episode 4, part - 1
- Pass prop(argument) to component 
- what is prop.
- props destructuring.
- Making dynamic website for 1 resturent 
 - Inporting swiggy api data static mode 
 - pass as argument. (IMP) learn
 - array join method
 - make image dynamic 
- Making website dynamic for multiple resturent

*/

/*
- Header
  - Logo
  - nav bar
- Body
 - search 
 - resturent container 
   - resturant carts 
     - Img 
     - Name of res, Star Rating, cuisines, etc.
- Footer 
  - Copyright 
  - Links 
  - Address
  - contact
*/

// Hearder Component --  that hold the logo and nav bars
const HeaderCom = () => {
  return (
    <header className="header">
      <div className="img-container">
        <img
          className="image"
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
        />
      </div>

      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

// Reasturant Cart Component that hold information about the reaturent
const RescartCom = (props) => {
  console.log(props); // output - object
  // object destructuring
  const { resData } = props;
  return (
    <div>
      <div className="res-cart-container">
        <img
          className="res-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/{resData.info.cloudinaryImageId}"
        />
        <h3 className="name">{resData.info.name} </h3>
        <h4>{resData.info.costForTwo.slice(0, 4)}</h4>
        <h4 className="cuisines">{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// resturent data in object farm.
const resobj = {
  info: {
    id: "340854",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "City Heart",
    areaName: "Janta Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.9,
    feeDetails: {
      restaurantId: "340854",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3200,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3200,
    },
    parentId: "721",
    avgRatingString: "3.9",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-11-12 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      },
      freedelMessage: "FREE DELIVERY",
      badgeType: "BADGE_TYPE_ONE_LITE",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/pizza-hut-city-heart-janta-nagar-chandigarh-340854",
    type: "WEBLINK",
  },
};
// Body Component that hold search and reasturent cart.
const BodyCom = () => {
  return (
    <div className="main-body-container">
      <div className="search-container">Search</div>
      <div className="res-container">
        <RescartCom
          /*
          // We can pass data one by one it is not a good way
          name="Meghna Food"
          cuisines="Biryani, North Indian, Asian"*/

          // we can pass data like obj, we pass resobj in `{}` bcz resobj is a js object.
          resData={resobj}
        />
      </div>
    </div>
  );
};

// App component
const AppContainer = () => {
  return (
    <div>
      {" "}
      <HeaderCom />
      <BodyCom />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppContainer />);
