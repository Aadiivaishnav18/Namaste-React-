import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Restaurant_Menu} from '../utils/constant'

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const url =  Restaurant_Menu(resId);
                const response = await fetch(url);

                console.log("STATUS:", response.status);

                const text = await response.text();

                console.log("RESPONSE:", text);

                if (!text.trim()) {
                    setData({
                        error: "Swiggy API returned empty response",
                    });
                    return;
                }

                const json = JSON.parse(text);

                console.log("JSON:", json);

                setData(json);
            } catch (error) {
                console.log("FETCH ERROR:", error);

                setData({
                    error: error.message,
                });
            }
        };

        fetchMenu();
    }, [resId]);

    if (!data) {
        return <h1>Loading...</h1>;
    }

    if (data.error) {
        return (
            <div>
                <h1>API Error</h1>
                <p>{data.error}</p>
                <p>Restaurant ID: {resId}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Restaurant Menu</h1>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default RestaurantMenu;