import React from "react";
import ReactDOM from "react-dom";
import Likes from "./Likes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Likes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
