
import RestrurantCard from "./RestaurantCards";
import { use, useState } from "react";

const Body = () => {

    const [listOfRestuarant, setListOfRestuarant] = useState([
        {
            type: "restaurant",
            data: {
                "id": "168884",
                "name": "Uncle Peter's Pancakes",
                "image": "FOOD_CATALOG/IMAGES/CMS/2026/7/7/2f6c2426-ae9f-49ff-a14e-170d09af5cc6_95fc639b-c6f3-4335-88a8-6e0fd073502a.png",
                "cuisines": ["Waffle", "Desserts", "American", "Continental", "Beverages", "Ice Cream"],
                "rating": 4.1,
                "deliveryTime": "30-35 mins",
            }
        },
        {
            type: "restaurant",
            data: {
                "id": "444178",
                "name": "Magnolia Bakery",
                "image": "FOOD_CATALOG/IMAGES/CMS/2026/6/17/772a8b03-3a0c-48c2-a916-9f7e450af16b_16c589a4-79ba-4318-977d-eb0fb26017bf.png",
                "cuisines": ["Bakery", "Desserts", "Ice Cream"],
                "rating": 4.6,
                "deliveryTime": "25-30 mins",
            }
        },
        {
            type: "restaurant",
            data: {
                "id": "751353",
                "name": "Tim Hortons",
                "image": "fa82c229250adbd69440bb123d1b7b4d",
                "cuisines": ["Coffee", "Beverages", "Cafe", "Desserts", "Sandwich", "Fast Food"],
                "rating": 4.4,
                "deliveryTime": "15-20 mins",
            }
        },
    ])

    return (
        <div id="body">
            <div className="filter">
                <button className="filter-res"> Top listed Restaurants </button>
            </div>
            <div className="res-container">
                {listOfRestuarant.map((restaurant) => (
                    <RestrurantCard
                        key={restaurant.data.id}
                        resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;