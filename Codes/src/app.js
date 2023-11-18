import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import { HeaderCom } from "./Components/HeaderCom";
// App component
const AppContainer = () => {
  return (
    <div>
      <HeaderCom />
      <BodyCom />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppContainer />);
