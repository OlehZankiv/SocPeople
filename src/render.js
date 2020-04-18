import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let render = (state) => {
    ReactDOM.render(<App state={state} />, document.getElementById("root"));
};

export default render;