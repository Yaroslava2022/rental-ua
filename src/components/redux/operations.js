import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://648f305575a96b664444cf9f.mockapi.io/adverts';


export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (page,  {rejectWithValue }) => {
      // const page = 1;
      try {
        const response = await axios.get(`?p=${page}&limit=8`);
        console.log(response.data)
        return response.data;
      } catch (err) {
        console.log(err);
          return rejectWithValue(err.response.data);
      }
    }
  );
  