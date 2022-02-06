import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlise";


export const store = configureStore({
    reducer: {
        car: carReducer
    }
})