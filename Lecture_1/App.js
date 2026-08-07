// React program for the single element 

//  const heading = React.createElement("h1", {id:"heading"}, "Hello World form the Namaste React !");

// When the nested Element come like eg :-

// <div id="parent">
//     <div id="child">
//         <h1>

//         </h1>
//     </div>
// </div>


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, " I'am a h1 tag")
//     )
// );

//-----------------Continue ------------------------------------//
//    When the Sibling together Element come like eg :-

// <div id="parent">
//     <div id="child">
//         <h1>
//code 
//         </h1>
//   <h2>
//    code
//   </h2>
//     </div>
// </div>

// made them into the array of the arrgument of child 


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Hello This is h1 tag"),
//         React.createElement("h1", {}, "Hello This is h2 tag")]
//     )
// );



//-----------------Continue ------------------------------------//
//    When the Sibling come together in parent  come like eg :-

// <div id="parent">
//     <div id="child1">
//         <h1>
           //code 
//         </h1>
//   <h2>
//    code
//   </h2>
//     </div>

//     <div id="child2">
//         <h1>
           //code 
//         </h1>
//   <h2>
//    code
//   </h2>
//     </div>
// </div>

// made them into the array of the arrgument of child 



const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hello This is h1 tag"),
        React.createElement("h2", {}, "Hello This is h2 tag")]
    ),
      React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello This is h1 tag"),
        React.createElement("h2", {}, "Hello This is h2 tag")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

