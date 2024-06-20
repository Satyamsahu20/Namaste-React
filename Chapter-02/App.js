import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "heading_1"}, "This is Namaste React"),
        React.createElement("h2", {id: "heading_2"}, "Heading 2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "heading_3"}, "Heading 1"),
        React.createElement("h2", {id: "heading_4"}, "Heading 2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
