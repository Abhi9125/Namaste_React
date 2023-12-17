import { useEffect, useState } from "react";
// On fly Destructuring
const User = ({ name, Location }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Massing the things in functional Componet");
    }, 1000);

    // Unmounting here. when we go one page to diffrent page the setInterval will stop
    return () => {
      clearInterval(timer);
      console.log("Unmounting the funtional component");
    };
  }, []);
  return (
    <div className="detail-card">
      <h1>Count : {count}</h1>
      <h2>Count2 : {count2}</h2>
      <h3>{name}</h3>
      <h3>{Location}</h3>
      <h3>Contact : abhi.singh3231@gmail.com</h3>
    </div>
  );
};

export default User;
