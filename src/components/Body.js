import RestrurantCard from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124&lng=75.7873&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
        json?.data?.cards
            ?.map(
                (card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            ?.filter(Boolean)
            ?.flat() || [];

    // Remove duplicate restaurants
    const uniqueRestaurants = Array.from(
        new Map(
            restaurants.map((restaurant) => [
                restaurant.info.id,
                restaurant
            ])
        ).values()
    );

    setListOfRestuarant(uniqueRestaurants);
    setFilteredList(uniqueRestaurants);
};

    useEffect(() => {
        fetchData();
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
                            setSearchText(e.target.value);
                        }}
                        placeholder="Search restaurant"
                    />

                    <button
                        className="btn-search"
                        onClick={() => {
                            const filteredRestaurant =
                                listOfRestuarant.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                );

                            setFilteredList(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>

                </div>

                <button
                    className="filter-res"
                    onClick={() => {
                        const filteredRestaurant =
                            listOfRestuarant.filter(
                                (res) => res.info.avgRating > 4.5
                            );

                        setFilteredList(filteredRestaurant);
                    }}
                >
                    Top Rated Restaurants
                </button>

            </div>

            <div className="res-container">

{filteredList.map((restaurant, index) => (
    <RestrurantCard
        key={`${restaurant.info.id}-${index}`}
        resData={restaurant}
    />
))}
            </div>

        </div>
    );
};

export default Body;