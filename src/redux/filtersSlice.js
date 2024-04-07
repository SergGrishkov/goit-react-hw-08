import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  name: "",
};
const slice = createSlice({
  name: "filters",
  initialState: initialFilters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.trim();
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
export const selectNameFilter = (state) => state.filters.name;
