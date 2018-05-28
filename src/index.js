/**
 * @class ReactFileLoad
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import readery from "readery";

import styles from "./styles.css";

export default class ReactFileLoad extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  state = {
    progress: 0
  };

  handleFileChange = e => {
    const {
      onChange = () => {},
      onProgress = () => {},
      onDataChunk = () => {},
      readeryConfig,
      chunkSize = 1024
    } = this.props;

    let file = e.target.files[0];
    readery.readFromFile(
      file,
      data => onDataChunk,
      p => {
        this.setState({ progress: p });
        onProgress(p);
      },
      readeryConfig,
      chunkSize
    );
  };

  render() {
    const {
      style = {},
      text,
      accept,
      fromColor = "#007bff",
      toColor = "#2c5888",
      finishedColor = "#2c5888"
    } = this.props;

    let ownStyle =
      this.state.progress === 0
        ? {}
        : this.state.progress === 100
          ? { background: finishedColor }
          : {
              background: `linear-gradient(to right, ${toColor} ${
                this.state.progress
              }%, ${fromColor} 0%)`
            };

    const classNames = `${styles["react-file-load-btn"]}`;
    return (
      <div>
        <label
          type="button"
          htmlFor="files"
          className={`${classNames}`}
          style={{...ownStyle, ...style}}
        >
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
