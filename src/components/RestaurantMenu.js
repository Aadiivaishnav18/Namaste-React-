import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="w-8/12 mx-auto my-10">

            <div className="text-center">
                <h1 className="text-3xl font-bold">{name}</h1>

                <p className="text-gray-600 mt-2">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-5">
                Menu
            </h2>

            <div className="grid grid-cols-2 gap-5">
                {itemCards.map((item) => {
                    const info = item.card.info;

                    return (
                        <div
                            key={info.id}
                            className="flex justify-between gap-4 p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    {info.name}
                                </h3>

                                <p className="text-gray-700 mt-1">
                                    ₹{info.price / 100 || info.defaultPrice / 100}
                                </p>

                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {info.description}
                                </p>
                            </div>

                            {info.imageId && (
                                <img
                                    className="w-28 h-28 object-cover rounded-lg"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                                    alt={info.name}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default RestaurantMenu;