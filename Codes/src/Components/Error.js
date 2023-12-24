// importing hook useRouterError from react-router-dom
import { useRouteError } from "react-router-dom";

const Error = () => {
  // useRouterError return an Object.
  const errorObj = useRouteError();
  console.log(errorObj);
  return (
    <div className="m-4">
      <h1 className="font-bold">Oppssss!!!!!!</h1>
      <br />
      <h2>{errorObj.status + " " + errorObj.statusText}</h2>
    </div>
  );
};
export default Error;
