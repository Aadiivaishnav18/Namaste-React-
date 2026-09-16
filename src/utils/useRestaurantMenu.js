import { useEffect, useState } from "react";
import {Restaurant_Menu} from '../utils/constant'
const useRestaurantMenu = (resId) =>{

    const [resInfo, setresInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await  fetch(Restaurant_Menu + resId);
        const json = await data.json();
        setresInfo(json.data)
    }


    return resInfo;
};


export default useRestaurantMenu;