import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    const showHideClassName = this.props.show
      ? "modal d-block"
      : "modal d-none";

    if (!this.props.show) {
      return null;
    }
    return (
      <div className={showHideClassName}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
