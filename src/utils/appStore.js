
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
const appStore = configureStore({
    // its is a single store which can have multiple reducers
    reducer: {
        cart: cartReducer,
    },
});

export default appStore