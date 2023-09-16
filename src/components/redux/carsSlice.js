import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {  
    items: [],
    isLoading: false,
    error: null,
  }
  const handlePending = state => {
    state.isLoading = true
    
  }
  
  const handleRejected = (state, {payload}) => {
    
      state.isLoading = false
      state.error = payload
    }
  
  
  const handleFetchCarsSuccess = (state, {payload}) => {
    
      state.isLoading =false
      state.error= null
      state.items = payload 
  };  

  const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: {
      [fetchCars.pending]: handlePending,
      [fetchCars.rejected]: handleRejected,
      [fetchCars.fulfilled]: handleFetchCarsSuccess,
     
    },
  });
  
  export const carsReducer = carsSlice.reducer;