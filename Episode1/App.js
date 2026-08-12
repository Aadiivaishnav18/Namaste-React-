
import React from "react";
import ReactDOM from "react-dom/client";



//JSX code -- (Babel convert) => React.createElement => ReactElement --(JS Object) =>HTML Element
const jsxheading = <h1 id="headinng"> Namaste React using JSX 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxheading);

