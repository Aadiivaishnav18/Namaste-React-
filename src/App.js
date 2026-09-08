import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";


// App Layout
const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Body />
        </div>
    );
};


// Router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },

    {
        path: "/about",
        element: <About />,
    },
    
        {
        path: "/contact",
        element: <Contact/>,
    },

]);


// Root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);