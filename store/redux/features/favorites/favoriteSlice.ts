import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type FavoritesState = string[];

const initialState: FavoritesState = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      return state.filter((state) => state !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
