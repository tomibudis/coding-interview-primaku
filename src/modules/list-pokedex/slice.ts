import { createSlice } from "@reduxjs/toolkit";

export interface PokedexState {
  data: {
    name: string;
    url: string;
  }[];
  currentPage: number;
}
const initialState = {
  data: [],
  currentPage: 1,
};

export const listPokedexSlice = createSlice({
  name: "list-pokedex",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setData, setCurrentPage } = listPokedexSlice.actions;

export default listPokedexSlice.reducer;
