const heading = React.createElement("h1", {id: "heading"}, "Hello world using React"); // create React element which is JS Object
/*
   h1 -> html tag, 
   {} -> attribute of html tag, 
   " Hello world using React" -> content to html tag
*/

// const heading = React.createElement("h1", {xyz : "head"}, "Hello world using React"); // Inside {}, you can add any attribute to h1 tag

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root

root.render(heading); // render(add child) heading(h1 tag) inside the root


// ------||------



