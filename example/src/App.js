import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import HighlightedCode from "./HighlightedCode";
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
          <div style={{width: "70%"}}>
            <h2>Progress bar</h2>
            <HighlightedCode>{example1Text}</HighlightedCode>;  
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
