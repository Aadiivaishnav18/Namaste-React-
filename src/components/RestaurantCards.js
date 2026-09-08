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
        <div className="res-cart">

            <img
                className="res-logo"
                src={CARD_URL + cloudinaryImageId}
                alt={name}
            />

            <div className="text">
                <h3>{name}</h3>

                <h4>⭐ {avgRating}</h4>

                <h4>{costForTwo}</h4>

                <p>{cuisines?.join(", ")}</p>

                <p>{areaName}</p>
            </div>

        </div>
    );
};

export default RestrurantCard;