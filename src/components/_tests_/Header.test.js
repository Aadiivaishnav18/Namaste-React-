
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appstore from "../../utils/appStore";
import "@testing-library/jest-dom"



it("Should render the login button in Header Component", () =>{

    // render
  render(
<BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}>
  <Provider store={appstore}>
  <Header/>
  </Provider>
  </BrowserRouter>
)

//Querying 
 
const loginButton = screen.getByRole("button", {name: "Login"});

//it can also be written as:
// const loginButton = screen.getByText("button");


// Assertion
expect(loginButton).toBeInTheDocument();


});


it("Should render the Cart -0 button in Header Component", () =>{

    // render
  render(
<BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}>
  <Provider store={appstore}>
  <Header/>
  </Provider>
  </BrowserRouter>
)

//Querying 
 

const cartButton = screen.getByText(/Cart\s*-\s0\sitems/i);

//it can also be written as:
// const loginButton = screen.getByText("button");


// Assertion
expect(cartButton).toBeInTheDocument();


})