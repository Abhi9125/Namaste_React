// importing hook useRouterError from react-router-dom
import { useRouteError } from "react-router-dom";

const Error = () => {
  // useRouterError return an Object.
  const errorObj = useRouteError();
  console.log(errorObj);
  return (
    <div className="m-4">
      <h1 className="font-bold mx-3">Opps!!</h1>
      <h1 className="font-bold mx-3">Something went wrong...</h1>

      <br />
      <h2 className="mx-4">{errorObj.status + "    " + errorObj.statusText}</h2>
    </div>
  );
};
export default Error;
