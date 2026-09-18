import { CARD_URL } from "../utils/constant";

const RestrurantCard = ({ resData }) => {

    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        areaName
    } = resData.info;

    return (
        <div className="h-full overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl p-2 m-2">

            <img
                className="h-56 w-full object-cover  p-1 rounded-2xl"
                src={CARD_URL + cloudinaryImageId}
                alt={name}
            />

            <div className="p-4">

                <h3 className="mb-1 truncate text-lg font-bold text-gray-800">
                    {name}
                </h3>

                <h4 className="mb-2 font-semibold text-gray-700">
                    ⭐ {avgRating}
                </h4>

                <h4 className="mb-2 text-sm font-medium text-gray-600">
                    {costForTwo}
                </h4>

                <p className="mb-2 line-clamp-2 text-sm text-gray-500">
                    {cuisines?.join(", ")}
                </p>

                <p className="text-sm text-gray-500">
                    📍 {areaName}
                </p>

            </div>

        </div>
    );
};

export default RestrurantCard;