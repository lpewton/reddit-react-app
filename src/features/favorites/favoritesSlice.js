import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favoriteArticles',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter(article => article.data.id !== action.payload.data.id)        }
    }
})

export const selectFavoriteArticles = (state) => state.favoriteArticles;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;