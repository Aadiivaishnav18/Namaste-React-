import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["burger", "pizza"] // take the dummy data for now because due to the api call we are not able to get the data from the api so we are taking the dummy data for now.
    },
    // this is a object which contains all the reducers which we want to create for this slice whicha are mutiples small functions 
    reducers: {
        addItem: (state, action) => {
            // Here we can directly mutate the state because redux toolkit uses immer library which takes care of immutability

            // what is mean of mutate the state- means we can directly change the state without creating a new state object and return it.
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state, action) => {
            // state = []; it is a local variable 
            // which means it will not change the state of the cart because we are not returning the new state object.
            // state.items.length = 0; // originalState = []; // this is the correct way to clear the cart because we are changing the original state object.

            return { items: [] }; // this is  also the correct way to clear the cart because we are returning the new state object.
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; 