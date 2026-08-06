// React program for the single element 

//  const heading = React.createElement("h1", {id:"heading"}, "Hello World form the Namaste React !");

// When the nested Element come like eg :-

    // <div id="parent">
    //     <div id="child">
    //         <h1>
                
    //         </h1>
    //     </div>
    // </div>


    const parent = React.createElement("div", {id:"parent"},
        React.createElement("div", {id:"child"},
            React.createElement("h1", {}, " I'am a h1 tag")
        )
    );



 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);

