import { createSlice } from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
  name: 'Search',
  initialState: {
    isSearch: true,
  },
  reducers: {
    openSearch: (state) => ({
      ...state,
      isSearch: false,
    }),
    closeSearch: (state) => ({
      ...state,
      isSearch: true,
    }),
  },
});

export const { openSearch, closeSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
