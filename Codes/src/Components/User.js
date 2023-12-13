import { useState } from "react";
// On fly Destructuring
const User = ({ name, Location }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
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
