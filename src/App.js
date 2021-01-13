import "./App.css";
import DisplayName from "./Login/DisplayName.jsx";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <DisplayName firstName={"John"} lastName={"Doe"} />
        </div>
      </div>
    );
  }
}
