import { FavoritesState } from "./FavoritesProvider";

type favoritesActionType =
  | { type: "Add-Favorite"; payload: string }
  | { type: "Remove-Favorite"; payload: string[] };

export const favoritesReducer = (
  state: FavoritesState,
  action: favoritesActionType
) => {
  switch (action.type) {
    case "Add-Favorite":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "Remove-Favorite":
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
