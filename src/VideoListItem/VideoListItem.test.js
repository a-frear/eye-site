import React from "react";
import ReactDOM from "react-dom";
import VideoListItem from "./VideoListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
