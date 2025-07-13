// create a element one child
const heading = React.createElement("h1", { id: "heading" }, "hello brother");

console.log(heading); //object

//nested child or multiple elements

const paren1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h2", { id: "one" }, "i am h2"),
    React.createElement("h1", { id: "two" }, "i am h1"),
  ])
);

//nested sibling child - this will painful to write nested childs
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h2", { id: "one" }, "i am h2"),
    React.createElement("h1", { id: "two" }, "i am h1"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h2", { id: "one" }, "i am h2"),
    React.createElement("h1", { id: "two" }, "i am h1"),
  ]),
]);

// root element obj
const root = ReactDOM.createRoot(document.getElementById("root"));

// this render will renders on the dom
// this will replace insdie any elements already written in html inside root div
// root element has all conrolled by react
root.render(parent);

// react is librery it can work or use in the small porttion of your app not a full fledged
// framework is full fledged app but react is use in we can use in small portion of any app
