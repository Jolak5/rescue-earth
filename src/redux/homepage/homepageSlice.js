import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://financialmodelingprep.com/api/v3/fx?apikey=ac91a71935951d8364423fb181d530c8';

export const getForexData = createAsyncThunk(
  'data/getForexData',
  async () => {
    try {
      const res = await axios.get(url);
      const newForex = res.data.map((item) => ({
        id: item.ticker,
        ticker: item.ticker,
        bid: item.bid,
      }));
      return newForex;
    } catch (error) {
      return error.message;
    }
  },
);

export const ForexSlice = createSlice({
  name: 'Forex',
  initialState: {
    Forex: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(getForexData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getForexData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        Forex: action.payload,
      }))
      .addCase(getForexData.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default ForexSlice.reducer;
