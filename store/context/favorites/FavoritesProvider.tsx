import { useReducer } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { favoritesReducer } from "./favoritesReducer";

export interface FavoritesState {
  favorites: string[];
}

const favorites_INITIAL_STATE: FavoritesState = {
  favorites: [],
};

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    favorites_INITIAL_STATE
  );

  const addFavorite = (mealId: string) => {
    dispatch({ type: "Add-Favorite", payload: mealId });
  };

  const removeFavorite = (mealId: string) => {
    const newFavorites = state.favorites.filter((id) => id !== mealId);

    dispatch({ type: "Remove-Favorite", payload: newFavorites });
  };

  return (
    <FavoritesContext.Provider
      value={{ ...state, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
