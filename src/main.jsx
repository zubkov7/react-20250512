// import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

const data = [1, 2, 3, 4, 5];

// reactRoot.render(
// createElement(
//   "ul",
//   { className: "someClass", style: { color: "red" } },
//   data.map((el) => createElement("li", {}, createElement("span", {}, el)))
// )

// createElement(
//   "button",
//   {
//     onClick: () => {
//       console.log("click");
//     },
//   },
//   "hello world!"
// )
// );

reactRoot.render(
  <ul className='someClass' style={{ color: "red" }}>
    {data.map((el) => (
      <li key={el}>{el}</li>
    ))}
  </ul>
);

console.log(reactRoot);
