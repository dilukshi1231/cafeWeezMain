import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Card';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: ...
    }
})