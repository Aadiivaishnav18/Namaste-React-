import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

// Used for the Group for Test Cases ;
describe("Contact us Pages Test Cases",()=>{

 test("Should load ContactUs component", ()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load  2 button inside ContactUs component", ()=>{
    render(<Contact/>)
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
});

test("Should load 2 Submit inside ContactUs component", ()=>{
    render(<Contact/>)
    const buttons = screen.getAllByText("Submit");

    expect(buttons.length).toBe(2);
});

// We can Also write the test Function as the it ( just the industry convection)

// it ("Should load ContactUs component", ()=>{
//     render(<Contact/>)
//     const heading = screen.getByRole("heading");

//     expect(heading).toBeInTheDocument();
// });

// it("Should load  2 button inside ContactUs component", ()=>{
//     render(<Contact/>)
//     const buttons = screen.getAllByRole("button");

//     expect(buttons.length).toBe(2);
// });

// it("Should load 2 Submit inside ContactUs component", ()=>{
//     render(<Contact/>)
//     const buttons = screen.getAllByText("Submit");

//     expect(buttons.length).toBe(2);
// })
});