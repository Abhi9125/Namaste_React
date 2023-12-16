import React from "react";

class UserClass extends React.Component {
  // class Component with props
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child Class Constructer");
    // console.log(props); //give object

    // In Class Component, declaring the local variable with this.state object. Here state is a reserve word.
    // In classComponet we do not create seprate variable for each local state like function component
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "Child Class didMount");
  }

  render() {
    const { name, Location } = this.props;

    console.log(this.props.name + "Child Class Render");
    return (
      <div className="detail-card">
        {/*Updating the UI of page by using USeState in classComponent*/}
        <h1>Count : {this.state.count}</h1>
        <h2>Count : {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3>{name}</h3>
        <h3>{Location}</h3>
        <h3>Contact : abhi.singh3231@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
