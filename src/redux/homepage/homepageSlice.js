import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}';

export const getPollutionData = createAsyncThunk(
  'data/getPollutionData',
  async () => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const pollutionSlice = createSlice({
  name: 'pollution',
  initialState: {
    pollution: [],
  },
  reducers: {},
});

export default pollutionSlice.reducer;
