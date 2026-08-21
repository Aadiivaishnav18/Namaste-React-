import { CARD_URL } from "../utils/constant";

const RestrurantCard = ({ resData }) => {

    return (
        <>
            {resData.map((restaurant) => {
                const { name, image, cuisines, rating } = restaurant.data;
                return (
                    <div key={restaurant.data.id} className="res-cart">
                        <img
                            className="res-logo"
                            alt={name} 
                            src={CARD_URL+image}
                        />
                        <div className="text">
                            <h3>{name}</h3>
                            <h4>{cuisines.join(", ")} </h4>
                            <h4>{rating} 🌟</h4>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default RestrurantCard;