import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy,Suspense } from "react";

// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

//===================================Dynamic Bundling , Lazy loading==============================//

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            
               {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense> ,
            },

            {
                path: "/restaurantmenu/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <RouterProvider router={appRouter} />
);