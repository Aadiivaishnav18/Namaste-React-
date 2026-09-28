import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: ["burger", "pizza"]
    },
    reducers : {
        addItem: (state, action) =>{
            // Here we can directly mutate the state because redux toolkit uses immer library which takes care of immutability
         state.items.push(action.payload);
        },

        removeItem: (state) =>{
            state.items.pop();
        },
 
        clearCart : (state, action) =>{
            state.items.length = 0;
        },
    },
});

export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; 