
import React from "react";
import ReactDOM from "react-dom/client";



//JSX code -- (Babel convert) => React.createElement => ReactElement --(JS Object) =>HTML Element
const Title = () =>(
<h1 id="headinng"> Namaste React using JSX 🚀</h1>
)

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxheading);



// React Component

const Heading = () => (
<div id ="Contaior"> 
    <Title />
<h1 id="heading"> Namaste React From React Component</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

      



