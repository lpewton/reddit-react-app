import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favoriteArticles',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const selectFavoriteArticles = (state) => state.favoriteArticles;
export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;