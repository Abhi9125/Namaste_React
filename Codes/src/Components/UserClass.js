import React from "react";

class UserClass extends React.Component {
  /*
Below code for normal class component(Without props) that show on UI
    render() {
    return (
      <div className="detail-card">
        <h3>Name : Abhishek Singh</h3>
        <h3>Location : Mohali</h3>
        <h3>Contact : abhi.singh3231@gmail.com</h3>
      </div>
    );
  }
*/

  // class Component with props
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <div className="detail-card">
        <h3>{this.props.name}</h3>
        <h3>{this.props.Location}</h3>
        <h3>Contact : abhi.singh3231@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
