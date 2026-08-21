
import RestrurantCard from "./RestaurantCards";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div id="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestrurantCard resData={resList} />
            </div>
        </div>
    )
}

export default Body;