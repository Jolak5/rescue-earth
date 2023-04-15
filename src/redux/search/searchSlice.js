import { createSlice } from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
  name: 'Search',
  initialState: {
    isSearch: false,
  },
  reducers: {
    openSearch: (state) => ({
      ...state,
      isSearch: true,
    }),
    closeSearch: (state) => ({
      ...state,
      isSearch: false,
    }),
  },
});

export const { openSearch, closeSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
