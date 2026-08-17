
import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return (
        <div className="header">

            <div className="logo-image">
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" alt="logo" />
            </div>

            <div className="list-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

// Body //

const RestrurantCard = () => {
    return (
        <div className="res-container">
            <div className="res-cart">
                <img
                    className="res-logo"
                    alt="image"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/8/14/81c4c74d-43af-4662-8210-ae031070b8cb_854658.jpg" />
                <div className="text">
                    <h3>GudMishri</h3>
                    <h4>Sweets, Desert, Bakery </h4>
                    <h4>4.4 🌟</h4>
                </div>

            </div>
        </div>
    )
}



const Body = () => {

    return (
        <div id="body">

            <div className="search">Search</div>
            <div className="res-container">
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
                <RestrurantCard />
            </div>


        </div>
    )



}

const AppLayout = () => {
    return (
        <div id="app" >
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);





