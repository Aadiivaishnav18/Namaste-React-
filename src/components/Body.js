
import RestrurantCard from "./RestaurantCards";
import { use, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    const [listOfRestuarant, setListOfRestuarant] = useState(resList)

    return (
        <div id="body">
            <div className="filter">
                <button className="filter-res"
                onClick={()=>{
   
                   const filteredList = listOfRestuarant.filter((res)=> res.data.rating> 4.5);
                
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