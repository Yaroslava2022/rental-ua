import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const favoriteInitialState = [];


export const favoriteReducer = (state = favoriteInitialState, action) => {
  switch (action.type) {
    case 'favorite/addFavorite':
      return (state = [...state, action.payload]);
    case 'favorite/deleteFavorite':
      return state.filter(favorite => favorite !== action.payload);
    default:
      return state;
  }
};
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite'],
  };
export const reducer =  combineReducers({
    cars: carsReducer,
    favorite: favoriteReducer,
    filter: filterReducer
})
export const persistedReducer = persistReducer(persistConfig, reducer);