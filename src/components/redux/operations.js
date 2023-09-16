import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://648f305575a96b664444cf9f.mockapi.io';

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_,  {rejectWithValue }) => {
      
      try {
        const response = await axios.get("/adverts");
        console.log(response.data)
        return response.data;
      } catch (err) {
        console.log(err);
          return rejectWithValue(err.response.data);
      }
    }
  );
  