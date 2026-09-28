import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ["burger", "pizza"]
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
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; 