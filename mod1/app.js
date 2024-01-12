import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return (<h1 id="title">Satya welcomes you</h1>)
}

const Child1 = () => {
    return (<div id="child1">Nesting</div>);
}

const Maincon = () => {
    return (
        <div className="parent">
            <Heading />
            <Child1 />
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Maincon />);
