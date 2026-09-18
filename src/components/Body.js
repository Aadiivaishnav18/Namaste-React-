import RestrurantCard from "./RestaurantCards";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    //==============================Checking Online Status========================//
    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.976056&lng=72.60176249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        const restaurants =
            json?.data?.cards
                ?.map(
                    (card) =>
                        card?.card?.card?.gridElements?.infoWithStyle
                            ?.restaurants
                )
                ?.filter(Boolean)
                ?.flat() || [];

        const uniqueRestaurants = Array.from(
            new Map(
                restaurants.map((restaurant) => [
                    restaurant.info.id,
                    restaurant,
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

    // Online status 
    if (onlineStatus === false) {
        return (
            <h1> Looks like you're offline!! Please Check your Internet Connection</h1>
        )
    }





    return (
        <div id="body">

            <div className="filter flex">

                <div className="search m-4 p-4 ">

                    <input
                        type="text"
                        className="search-box border-solid border-black  p-0.5 m-3 border-solid"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        placeholder="Search restaurant"
                    />

                    <button
                        className="btn-search  bg-orange-400 px-5 py-2 cursor-pointer text-white  "
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

                <div className="px-4 py-2 flex items-center text-white">
                    <button
                        className=" bg-orange-400  px-4 py-1 cursor-pointer  hover:bg-amber-600"
                        onClick={() => {
                            const filteredRestaurant =
                                listOfRestuarant.filter(
                                    (res) => res.info.avgRating > 4.2
                                );

                            setFilteredList(filteredRestaurant);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                </div>

            </div>

            <div className="res-container">

                {filteredList.map((restaurant) => (

                    <Link
                        key={restaurant.info.id}
                        to={`/restaurantmenu/${restaurant.info.id}`}
                        className="restaurant-link"
                    >

                        <RestrurantCard
                            resData={restaurant}
                        />

                    </Link>

                ))}

            </div>

        </div>
    );
};

export default Body;