// const heading = React.createElement("h1", { id: "heading", class: "satyaa" }, "Hello World!");
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);
/* <div id="parent">
    <div id="child1">
        <h1>heading 1</h1>
    </div>
    <div id="child2">
        <h2>heading 2</h2>
    </div>
</div> */ const par = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, React.createElement("h1", {}, "heading 1")),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("h2", {}, "heading 2"))
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
// React.render
root.render(par);

//# sourceMappingURL=index.7c0ccee6.js.map
