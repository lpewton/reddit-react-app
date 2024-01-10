import { configureStore } from "@reduxjs/toolkit";
import favoriteArticlesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    favoriteArticles: favoriteArticlesReducer,
  },
});