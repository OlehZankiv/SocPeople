import React from "react";
import ReactDOM from "react-dom";
import SocPeopleApp from "./App";

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SocPeopleApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
