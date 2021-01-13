import React, { Component } from "react";
import Proptypes from "prop-types";

export default class DisplayName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //firstName and lastName will have the props taken from App.js.
      firstName: props.firstName, //John
      lastName: props.lastName, //Doe
      //oldFirstName and oldLastName will be blank and will the firstName and lastName on saving.
      oldFirstName: "",
      oldLastName: "",
      isEdit: false,
    };

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  //this will rerender the the name as its being updated
  //we seperated the first and last name so that changing one doesn't override the other.
  //because we're passing in an event, we do not need to bind the function
  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  //this would allow you to see the change real time.
  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  //if you press edit, you want to edit so isEdit is true.
  edit = () => {
    this.setState({
      isEdit: true,
    });
  };
  //if you press save, you are not editing any more so isEdit would be false.
  //it will update the old names with the name latest name.
  save = () => {
    this.setState({
      oldFirstName: this.state.firstName,
      oldLastName: this.state.lastName,
      isEdit: false,
    });
  };

  //if you press cancel, you are not editing any more so isEdit would be false.
  //will display the old first and last name.
  cancel = () => {
    this.setState({
      firstName: this.state.oldFirstname,
      lastName: this.state.oldLastname,
      isEdit: false,
    });
  };

  Display = () => {
    //if we press edit...
    if (this.state.isEdit) {
      return (
        <div>
          {/*
          show the form that allows you to change first and last name.
          Along with a save and cancel button
      */}
          <form>
            <label for="Name">First Name:</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              defaultValue={this.state.firstName}
              onChange={(e) => {
                this.updateFirstName(e);
              }}
            ></input>
            <br></br>
            <label for="Name">Last Name:</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              defaultValue={this.state.lastName}
              onChange={(e) => {
                this.updateLastName(e);
              }}
            ></input>
            <br></br>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <button onClick={this.save}>Save</button>
            <button>Cancel</button>
          </form>
        </div>
      );
    } else {
      //if isEdit is false...
      //Display the name and the edit button.
      return (
        <div>
          <div>First Name: {this.state.firstName}</div>
          <div>Last Name: {this.state.lastName}</div>
          <button onClick={this.edit}>Edit</button>
        </div>
      );
    }
  };

  //call the Display method which will let the render know what to display.
  render() {
    return <div>{this.Display()}</div>;
  }
}

DisplayName.propTypes = {
  firstName: Proptypes.string,
  lastName: Proptypes.string,
};
