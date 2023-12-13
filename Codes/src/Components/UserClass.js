import React from "react";

class UserClass extends React.Component {
  // class Component with props
  constructor(props) {
    super(props);

    console.log(props);

    // In Class Component, declaring the local variable with this.state object. Here state is a reserve word.
    // In classComponet we do not create seprate variable for each local state like function component
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, Location } = this.props;
    return (
      <div className="detail-card">
        {/* If we directly access count it will throw error
        <h1>Count : {count}</h1> */}
        <h1>Count : {this.state.count}</h1>
        <h2>Count2 : {this.state.count2}</h2>
        <h3>{name}</h3>
        <h3>{Location}</h3>
        <h3>Contact : abhi.singh3231@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
