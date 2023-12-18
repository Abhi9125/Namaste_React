import { useState, useEffect } from "react";
import { Menu_API } from "./constant";

const useRestaurantMenuAPIFetch = (resId) => {
  const [resItemInfo, setResItemInfo] = useState("");
  useEffect(() => {
    Fetch_Api();
  }, []);

  const Fetch_Api = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    console.log(json);
    setResItemInfo(json);
  };

  return resItemInfo;
};

export default useRestaurantMenuAPIFetch;

/*****
 * Try to create custom hook inside the utility
 * custom hook same as Component
 * Must `use` before the custom hook
 *
 */
