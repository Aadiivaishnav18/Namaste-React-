
import { render, screen, fireEvent } from "@testing-library/react";
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
 
// /Cart/ is called regex expression, it will match any text which has Cart in it.
const cartButton = screen.getByText(/Cart/);

//it can also be written as:
// const loginButton = screen.getByText("button");

// Assertion
expect(cartButton).toBeInTheDocument();
});


// testing the login button click functionality, which will change the login button to logout button //

it("Should change the login button to Logout button on Click", () =>{

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
);

const loginButton = screen.getByRole("button", {name: "Login"});

//Click on the login button
fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", {name: "Logout"});

expect(logoutButton).toBeInTheDocument();
});