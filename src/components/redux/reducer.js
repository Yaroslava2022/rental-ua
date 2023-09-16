import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer =  combineReducers({
    cars: carsReducer,
    filter: filterReducer
})