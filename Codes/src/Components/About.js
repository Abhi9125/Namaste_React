import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      {/* simple call Component without props */}
      {/* <User /> */}

      {/* No call Component with props */}
      <User
        name={"Abhishek Singh (Functional Component)"}
        Location={"Mohali"}
      />

      {/* Simple call classComponent without any props */}
      {/* <UserClass /> */}

      {/* Calling class component with props */}
      <UserClass
        name={"Abhishek Singh (Class_Component)"}
        Location={"Mohali"}
      />
    </div>
  );
};
export default About;
