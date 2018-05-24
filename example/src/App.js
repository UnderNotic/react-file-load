import React, { Component } from "react";
import "./App.css";

import ReactLoadComponent from "react-file-load";

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <ReactLoadComponent text="My text" />
      </div>
    );
  }
}

export default App;
