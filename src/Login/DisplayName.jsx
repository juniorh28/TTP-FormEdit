import React, { Component } from "react";
import Proptypes from "prop-types";

export default class DisplayName extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    firstName: true,
    lastName: true,
  };

  //function that manipulate state
  /*
  function showName() {
      this.setState()  
  }
  */

  render() {
    return (
      <div>
        <form>
          <label for="Name">First Name:</label>
          <input id="firstName">Name: {this.state.firstName}</input>
          <input id="lasttName">Last: {this.state.lastName}</input>
        </form>
      </div>
    );
  }
}

DisplayName.propTypes = {
  firstName: Proptypes.string,
  lastName: Proptypes.string,
};
