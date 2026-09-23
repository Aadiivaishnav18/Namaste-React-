import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(userContext);

    return (


        <div className=" flex  justify-between  bg-orange-400 shadow-lg  m-2 p-2 ">

            <div className="logo-image">
                <img className=" w-32 h-32 m-2 p-2  " src={LOGO_URL} alt="logo" />
            </div>

            <div className="flex items-center">
                <ul className="flex m-4 p-4 gap-4 text-white  ">
                    <li className=" px-2 cursor-pointer hover:text-black">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>

                    <li className="px-2 cursor-pointer hover:text-black">
                        <Link to="/"> Home</Link>
                    </li>

                    <li className="px-2 cursor-pointer hover:text-black">
                        <Link to="/about">
                            About Us</Link>
                    </li>

                    <li className="px-2 cursor-pointer hover:text-black">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>


                    <li className="px-2 cursor-pointer hover:text-black">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>

                    <li className="px-2 cursor-pointer  hover:text-black">
                        Cart
                    </li>

                </ul>

                <div className="  flex items-center border-black  p-1 mr-2 bg-white hover:bg-yellow-50 shadow-2xl">
                    <button className="px-2 cursor-pointer  hover:text-black"
                        onClick={() => {

                            btnNameReact === "Login"
                                ? setbtnNameReact("Logout")
                                : setbtnNameReact("Login")
                        }}
                    >{btnNameReact}</button>


                </div>
                <ul>
                    <li className="px-2 cursor-pointer  hover:text-black text-white text-xl">
                        {loggedInUser}
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Header;