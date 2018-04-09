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

  handleFile() {
    
  }

  render() {
    const { showPercentages, text, accept } = this.props;

    return (
      <div>
        <label for="files" className={styles.btn}>
          {text}
        </label>
        <input
          id="files"
          style={{ display: "None" }}
          type="file"
          accept={accept}
        />
      </div>
    );
  }
}
