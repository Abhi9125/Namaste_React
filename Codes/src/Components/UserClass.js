import React from "react";

class UserClass extends React.Component {
  // class Component with props
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child Class Constructer");
  }

  // For calling live API we use `async` key word before the compomemtDidMount.
  componentDidMount() {
    // this interval will run after leaving this page so that reasion we use Unmounting.
    this.timer = setInterval(() => {
      console.log("Massing the things");
    }, 1000);
    console.log(this.props.name + "Child Class didMount");
  }

  componentDidUpdate() {
    console.log("Execute didUpdate");
  }

  // we use willUnmout bcz we want clean things before leaving the page.
  componentWillUnmount() {
    // After clear the Interval, if we go i page to diffrent page DidMount will Stop.
    clearInterval(this.timer);
    console.log("WillUnmount is execute");
  }

  render() {
    const { name, location } = this.props;
    console.log(this.props.name + "Child Class Render()");
    // debugger;
    return (
      <div className="detail-card">
        <h3>Name : Abhishek Singh</h3>
        <h3>Location : Mohali</h3>
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
