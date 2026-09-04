
import RestrurantCard from "./RestaurantCards";
import { use, useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestuarant, setListOfRestuarant] = useState([])

    useEffect(() => {

        const timer = setTimeout(() => {
            setListOfRestuarant(resList);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);
    // const fetchData = async () =>{
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.935192&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    //     );

    //     const json = await data.json();
    //     console.log(json);
    //     setListOfRestuarant(json.data.cards[2].data.data.cards);
    // }


// By using Ternary operator :-

    return listOfRestuarant.length === 0 ? (
        < Shimmer />
    ) : (
        <div id="body">
            <div className="filter">
                <button className="filter-res"
                    onClick={() => {

                        const filteredList = listOfRestuarant.filter((res) => res.data.rating > 4.5);

                        setListOfRestuarant(filteredList)
                    }}
                > Top listed Restaurants </button>
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