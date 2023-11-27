import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { HeaderCom } from "./Components/HeaderCom";
// importing router configration, RouterProvider for rendering.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// App component
const AppContainer = () => {
  return (
    <div>
      <HeaderCom />
      <BodyCom />
    </div>
  );
};

// Configar the path by use createBrowserRouter method
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
