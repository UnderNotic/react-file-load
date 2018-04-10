/**
 * @class ExampleComponent
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import readery from "readery";

import styles from "./styles.css";

export default class ReactFileLoad extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  handleFileChange = e => {
    console.log(e.target.files);
    console.log(readery);
    let file = e.target.files[0];
    readery.readFromFile(file, (data)=> console.log(data))
  };

  render() {
    const { showPercentages, text, accept } = this.props;

    return (
      <div>
        <label htmlFor="files" className={styles.btn}>
          {text}
        </label>
        <input
          id="files"
          onChange={this.handleFileChange}
          style={{ display: "None" }}
          type="file"
          accept={accept}
        />
      </div>
    );
  }
}
