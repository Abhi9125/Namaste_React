import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantsMenu from "./Components/RestaurantsMenu";
import HeaderCom from "./Components/HeaderCom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import UserContext from "./utility/UserContext";
// import Provider for config the store to app
import { Provider } from "react-redux";
import appStore from "./utility/appStore";
import Cart from "./Components/Cart";
const Grocery = lazy(() => import("./Components/Grocery"));
// App component
const AppContainer = () => {
  // let assume inisialy the contex value is default but if any user login our website it most show the data on the header and about section so for updating we use context provider
  const [userName, setUserName] = React.useState();

  // Get user data after the authentication
  React.useEffect(() => {
    data = {
      name: "Abhishek Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    /**
     * <Provider> use to provide store to our app, if we want to provide the Provider in a
     * perticular section so we wrapped only that section.
     */
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="font-sans text-sm bg-gray-100 min-h-screen">
          <HeaderCom />
          {/* I want when path is "/about" below <About/> render ho. agr "/contact" to below <Contact/ component render ho same for other header Component> */}
          {/* So for above functionality we use Outlet component and Children routing. */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
