
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCards";
import MOCK_DATA from "../MockData/ResCard.json";
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByRole("heading",{name: "Kanha"});

    expect(name).toBeInTheDocument();
})  