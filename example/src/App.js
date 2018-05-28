import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";

import ReactLoadComponent from "react-file-load";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "30px" }}>
            <ReactLoadComponent text="My text" />
          </div>
          <div>
            <h2>Progress bar.</h2>
            <p>
              Sint adipisicing eu laboris voluptate non anim Lorem esse aute
              cupidatat ex exercitation.
            </p>
          </div>
        </div>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "30px" }}>
            <ReactLoadComponent text="My text" />
          </div>
          <div>
            <h2>Read data in chunks.</h2>
            <p>
              Sint adipisicing eu laboris voluptate non anim Lorem esse aute
              cupidatat ex exercitation.
            </p>
          </div>
        </div>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "30px" }}>
            <ReactLoadComponent text="My text" />
          </div>
          <div>
            <h2>Highly customizable.</h2>
            <p>
              Sint adipisicing eu laboris voluptate non anim Lorem esse aute
              cupidatat ex exercitation.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
