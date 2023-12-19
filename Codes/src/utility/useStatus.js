import { useState, useEffect } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(true);

  //   We use this bcz hame kewal single time dekhna hai ki online hai ya nhi.
  useEffect(() => {
    // window.addEventListner return boolean value true or false
    window.addEventListener("offline", () => {
      setStatus(false);
    });

    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return status;
};

export default useStatus;
