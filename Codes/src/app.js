import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantsMenu from "./Components/RestaurantsMenu";
import HeaderCom from "./Components/HeaderCom";
// importing router configration, RouterProvider for rendering.
// Use import Outlet component for children routing.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./Components/Grocery";

/**
 * lazy is a way to make your React app faster by loading components only
 * when they're needed, and Suspense helps you handle the loading process more gracefully.
 */
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./Components/Grocery"));
// App component
const AppContainer = () => {
  return (
    <div>
      <HeaderCom />
      {/* I want when path is "/about" below <About/> render ho. agr "/contact" to below <Contact/ component render ho same for other header Component> */}
      {/* So for above functionality we use Outlet component and Children routing. */}
      <Outlet />
    </div>
  );
};

// Configar the path by use createBrowserRouter method
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    // children for giving children routing.
    children: [
      {
        path: "/",
        element: <BodyCom />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        // we give `:`(Collon) for dynamic routing.
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
