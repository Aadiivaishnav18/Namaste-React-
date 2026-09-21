import { useEffect, useState } from "react";
import { Restaurant_Menu } from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        const data = await fetch(Restaurant_Menu + resId);

        if (!data.ok) {
            return;
        }

        const text = await data.text();

        if (text && text.data) {
            setResInfo(text.data);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;