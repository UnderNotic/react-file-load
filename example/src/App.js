import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import code1 from "./code1.png";
import code2 from "./code2.png";
import code3 from "./code3.png";

import ReactLoadComponent from "react-file-load";

class App extends Component {
  render() {
    let example1Text = `<ReactLoadComponent text="Click me to check progress bar!"/>`;
    let example2Text = `<ReactLoadComponent text="Click me and provide comma seperated file!" readeryConfig={{ splitBy: ",", encoding: "UTF-8" }} onDataChunk={i => console.log("Im item from csv file " + i)}/>`;
    let example3Text = `<ReactLoadComponent text="Custom colors" fromColor = "yellow" toColor="black" finishedColor="green" style={{backgroundColor: "grey", color: "red", width: "400px"}}/>`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "150px",  marginRight: "10px" }}>
            <ReactLoadComponent text="Click me to check progress bar!" />
          </div>
          <div>
            <h2>Progress bar</h2>
              <img src={code1} style={{width: "100%"}} alt="code" />
          </div>
        </div>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "150px", marginRight: "10px" }}>
            <ReactLoadComponent
              text="Click me and provide comma seperated file!"
              readeryConfig={{ splitBy: ",", encoding: "UTF-8" }}
              onDataChunk={i => console.log("Im item from csv file" + i)}
            />
          </div>
          <div>
            <h2>Read data in chunks</h2>
            <p>
              <img src={code2} style={{width: "100%"}} alt="code" />
            </p>
          </div>
        </div>
        <hr />

        <div className="Flex-container">
          <div style={{ marginTop: "160px", marginRight: "10px" }}>
            <ReactLoadComponent
              text="Custom colors"
              fromColor="yellow"
              toColor="black"
              finishedColor="green"
              style={{ backgroundColor: "grey", color: "red", width: "400px" }}
            />
          </div>
          <div>
            <h2>Highly customizable</h2>
            <p>
              <img src={code3} style={{width: "100%"}} alt="code" />
            </p>
          </div>
        </div>

        <hr />
        <br />
        <div className=" Link">
          <h2>
            Documenation on{" "}
            <a href="https://github.com/UnderNotic/react-file-load">
              github.com/UnderNotic/react-file-load
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
