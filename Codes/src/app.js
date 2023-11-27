import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import HeaderCom from "./Components/HeaderCom";
// importing router configration, RouterProvider for rendering.
// Use import Outlet component for children routing.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
    ],
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
