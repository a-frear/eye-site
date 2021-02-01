import React from "react";
import ReactDOM from "react-dom";
import LikeButton from "./LikeButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LikeButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
