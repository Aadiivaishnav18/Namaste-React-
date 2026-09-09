import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


// App Layout
const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
        </div>
    );
};


// Router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },
        ],

        errorElement: <Error />,
    },

]);

// Root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);