import RestrurantCard from "./RestaurantCards";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setListOfRestuarant(resList);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (listOfRestuarant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div id="body">

            <div className="filter">

                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                    />

                    <button
                        className="btn-search"
                        onClick={() => {
                            const filteredRestaurant = listOfRestuarant.filter((res) =>
                                res.data.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );

                            setListOfRestuarant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="filter-res"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.data.rating > 4.5
                        );
                        setListOfRestuarant(filteredList);
                    }}
                >
                    Top Listed Restaurants
                </button>

            </div>

            <div className="res-container">
                {listOfRestuarant.map((restaurant) => (
                    <RestrurantCard
                        key={restaurant.data.id}
                        resData={restaurant}
                    />
                ))}
            </div>

        </div>
    );
};

export default Body;