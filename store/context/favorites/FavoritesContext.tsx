import { createContext } from "react";

interface ContextProps {
  favorites: string[];

  //Methods
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
}

export const FavoritesContext = createContext({} as ContextProps);
