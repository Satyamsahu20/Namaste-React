import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement- JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React 🚀"
// );

// console.log(heading)

// JSX - HTML-like or XML-like Syntax

// JSX => Babel Transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>

// React Element
const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">
Namaste React using JSX
</h1>);

console.log(jsxHeading)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)

// React Function Component 
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
};

// const HeadingComponent = () => <h1>Namaste React Functional Component</h1> -> Can write like this also

/* -> Can write like this also
const HeadingComponent = () => (
    <h1 className="heading">Namaste React Functional Component</h1>
);
*/


// const HeadingComponent1 = () => (
//     <div className="container">
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

const Title = () => ( // Function Component
    <h1 className="heading">Namaste React Title1</h1>
);

//Component Composition
// const HeadingComponent1 = () => (
//     <div className="container">
//         <Title />
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

// Can use Normal JS Function
/*
const HeadingComponent1 = function (){ 
    return (
    <div className="container">
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    );
};
*/

// const number = 1000; // JS Variable


// const HeadingComponent2 = () => (
//     <div className="container">
//         {number}
//         <h2>{number}</h2>
//         <h1>{console.log("ssdkddfsjfdsf")}</h1>
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );


const elem = <span>React Element</span>

const Elem1 = () => (
    <h1>
        NR
    </h1>
)

const title = ( // React Element
    <h1>
    {elem}
    {Elem1()}
    <Elem1></Elem1>
    <Elem1/>
    Namaste React Title2
    {<HeadingComponent />}
    </h1>
);

const HeadingComponent1 = () => (
    <div className="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent1 />);