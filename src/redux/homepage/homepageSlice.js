import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://coronavirus.m.pipedream.net/';

export const getForexData = createAsyncThunk(
  'data/getForexData',
  async () => {
    try {
      const res = await axios.get(url);
      const covidData = res.data.rawData.map((item) => ({
        id: item.Combined_Key,
        country: item.Country_Region,
        death: item.Confirmed,
        Deaths: item.Deaths,
        Fatality: item.Case_Fatality_Ratio,
      }));
      return covidData;
    } catch (error) {
      return error.message;
    }
  },
);

export const ForexSlice = createSlice({
  name: 'Forex',
  initialState: {
    Forex: [],
    forexItem: [],
    isLoading: true,
  },
  reducers: {
    renderItem: (state, action) => {
      const id = action.payload;
      const forexFiltered = state.Forex.filter((Forex) => Forex.id === id);
      return { ...state, forexItem: forexFiltered };
    },
    filterItem: (state, action) => {
      const value = action.payload;
      const filteredItem = state.Forex.filter((forex) => forex.name.includes(value));
      return { ...state, Forex: filteredItem };
    },
  },
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
export const { renderItem } = ForexSlice.actions;
export default ForexSlice.reducer;
