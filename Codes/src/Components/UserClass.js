import React from "react";

class UserClass extends React.Component {
  // class Component with props
  constructor(props) {
    super(props);

    // In Class Component, declaring the local variable with this.state object. Here state is a reserve word.
    // In classComponet we do not create seprate variable for each local state like function component
    this.state = {
      userInfo: {
        name: "Dummy_Name",
        following: "Dummy_following",
      },
    };

    console.log(this.props.name + "Child Class Constructer");
  }

  // For calling live API we use `async` key word before the compomemtDidMount.
  async componentDidMount() {
    // console.log(this.props.name + "Child Class didMount");

    const jsonData = await fetch("https://api.github.com/users/Abhi9125");
    const data = await jsonData.json();

    this.setState({
      userInfo: data,
    });
    console.log(data);
  }

  componentDidUpdate() {
    console.log("Execute didUpdate");
  }

  componentWillUnmount() {
    console.log("WillUnmount is execute");
  }

  render() {
    const { name, following } = this.state.userInfo;
    console.log(this.props.name + "Child Class Render()");

    debugger;
    return (
      <div className="detail-card">
        <h3>{name}</h3>
        <h3>Number of following {following}</h3>
        <h3>Contact : abhi.singh3231@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;

/******
 * ------Mounting Phase----------
 * constroctor
 * render()
 * Dom update with Dummy data
 * componentDidMount
 *
 * Api call and update the state by using setState.
 *
 *
 * After using the setState we go to the updating phase
 * ----------Updating Phase-------------------------
 * render() happen with update state.
 * Dom update with updated state.
 * componentDidUpdate();
 *
 * ------------Unmounding Phase---------------------
 * It happen when we move different rout.
 */
