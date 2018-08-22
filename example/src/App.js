import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import mainGif from "./main.gif";
import HighlightedCode from "./HighlightedCode";
import ReactLoadComponent from "react-file-load";

class App extends Component {
  render() {
    let example1Text = `<ReactLoadComponent text="Click me to check progress bar!"/>`;
    let example2Text = `<ReactLoadComponent text="Click me and provide comma seperated file!" 
    readeryConfig={{ splitBy: ",", encoding: "UTF-8" }} 
    onDataChunk={i => console.log("Im item from csv file " + i)}/>`;
    let example3Text = `<ReactLoadComponent text="Custom colors" 
    fromColor = "yellow" 
    toColor="black" 
    finishedColor="green" 
    style={{backgroundColor: "grey", color: "red", width: "400px"}}/>`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={mainGif} className="App-gif" alt="git" />
        </header>
        <hr />

        <div>
          <h2>Progress bar -></h2>
          <div className="Flex-container">
            <div>
              <ReactLoadComponent text="Click me to check progress bar!" />
            </div>
            &rArr;
          <div>
              <HighlightedCode >{example1Text}</HighlightedCode>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h2>Read data in chunks</h2>
          <div className="Flex-container">
            <div>
              <ReactLoadComponent
                text="Click me and provide file!"
                readeryConfig={{ splitBy: ",", encoding: "UTF-8" }}
                onDataChunk={i => console.log("Im item from csv file" + i)}
                finishedColor="green"
              />
            </div>
            &rArr;
          <div>
              <HighlightedCode>{example2Text}</HighlightedCode>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h2>Highly customizable</h2>
          <div className="Flex-container">
            <div>
              <ReactLoadComponent
                text="Custom colors"
                fromColor="yellow"
                toColor="black"
                finishedColor="green"
                style={{ backgroundColor: "grey", color: "red", width: "400px" }}
              />
            </div>
            &rArr;
          <div>
              <HighlightedCode>{example3Text}</HighlightedCode>;
          </div>
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
