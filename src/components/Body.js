import RestrurantCard, { withRestaurentLabel } from "./RestaurantCards";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();
    //User Context Authentication
      const {loggedInUser, setUserName} = useContext(userContext);

    const RestrurantCardPromoted = withRestaurentLabel(RestrurantCard);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124&lng=75.7873&page_type=DESKTOP_WEB_LISTING"
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

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please Check your Internet
                Connection
            </h1>
        );
    }

    if (listOfRestuarant.length === 0) {
        return <Shimmer />;
    }

  

    return (
        <div id="body" className="min-h-screen bg-gray-50">

            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">

                <div className="flex items-center gap-2">

                    <input
                        type="text"
                        className="w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-orange-400"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        placeholder="Search restaurant"
                    />

                    <button
                        className="cursor-pointer rounded-lg bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600"
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

                <div>
                    <button
                        className="cursor-pointer rounded-lg bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600"
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

                   <div>
                <label>UserName: </label>
                    <input className="w-64 rounded-lg border border-black-300 bg-white px-4 py-2 outline-none" 
                    value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)}></input>                
                </div>

            </div>

            <div className="grid grid-cols-1 gap-5 px-6 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {filteredList.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurantmenu/${restaurant.info.id}`}
                        className="block"
                    >
                        {
                            restaurant.info.promoted ?
                                (<RestrurantCardPromoted resData={restaurant} />) :
                                (<RestrurantCard resData={restaurant} />)
                        }

                    </Link>
                ))}

            </div>

        </div>
    );
};

export default Body;