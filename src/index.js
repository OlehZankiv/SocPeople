import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postsData = [
    { id: 1, message: "Hello, It's my first props", likeCount: 6 },
    { id: 1, message: "It's very funny!", likeCount: 11 },
];

let dialogsData = [
    { id: 1, name: "Aleh" },
    { id: 2, name: "Ovechka" },
    { id: 3, name: "Yana" },
    { id: 4, name: "Putana" },
];

let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Good, are you?" }
];

ReactDOM.render(
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
