// On fly Destructuring
const User = ({ name, Location }) => {
  return (
    <div className="detail-card">
      <h3>{name}</h3>
      <h3>{Location}</h3>
      <h3>Contact : abhi.singh3231@gmail.com</h3>
    </div>
  );
};

export default User;
