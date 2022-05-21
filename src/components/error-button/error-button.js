import React, { Component } from "react";
import "./error-button.css";

export default class ErrorButton extends Component {
  state = {
    error: false,
  };
  onErrorClick = () => {
    console.log("on error");
    this.setState(({ error }) => {
      return {
        error: !error,
      };
    });
  };
  render() {
    if (this.state.error) {
      this.foo.bar = 0;
    }
    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={this.onErrorClick}
      >
        Throw Error!
      </button>
    );
  }
}
