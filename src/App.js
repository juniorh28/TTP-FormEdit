import "./App.css";
import DisplayName from "./Login/DisplayName.jsx";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayName />
      </div>
    );
  }
}
