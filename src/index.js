/**
 * @class ReactFileLoad
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import readery from "readery";
import uuid from "lodash/uniqueId";

import styles from "./styles.css";

export default class ReactFileLoad extends Component {
  constructor(){
    super();
    this.id = uuid();
  }
  
  static propTypes = {
    text: PropTypes.string
  };

  state = {
    isLoading: false,
    progress: 0
  };

  handleFileChange = e => {
    const {
      onChange = () => {},
      onProgress = () => {},
      onDataChunk = () => {},
      onFinished = () => {},
      readeryConfig,
      chunkSize = 1024
    } = this.props;

    onChange();
    let file = e.target.files[0];
    readery.readFromFile(
      file,
      onDataChunk,
      p => {
        this.setState({ progress: p, isLoading: true });
        onProgress(p);
      },
      () => {
        this.setState({ isLoading: false });
        onFinished();
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

    let gradientStyle =
      this.state.progress === 0
        ? {}
        : this.state.progress === 100
          ? { background: finishedColor }
          : {
              background: `linear-gradient(to right, ${toColor} ${
                this.state.progress
              }%, ${fromColor} 0%)`
            };
    let cursorStyle = this.state.isLoading ? { cursor: "wait" } : {};

    const classNames = `${styles["react-file-load-btn"]}`;
    return (
      <React.Fragment>
        <label
          type="button"
          htmlFor={this.id}
          className={classNames}
          style={{ ...gradientStyle, ...cursorStyle, ...style }}
        >
          {text}
        </label>
        <input
          disabled={this.state.isLoading}
          id={this.id}
          onChange={this.handleFileChange}
          style={{ display: "None" }}
          type="file"
          accept={accept}
        />
      </React.Fragment>
    );
  }
}
