import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterCar: (_, { payload }) => {
      // console.log(state);
      return payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterCar } = filterSlice.actions;