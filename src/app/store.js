import { configureStore } from "@reduxjs/toolkit";
import favoriteArticlesReducer from "../features/favorites/favoritesSlice";
import notesReducer from '../features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    favoriteArticles: favoriteArticlesReducer,
    notes: notesReducer,
  },
});