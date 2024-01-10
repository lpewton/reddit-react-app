import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favoriteArticles',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {          
            state.push(action.payload);
            console.log(state.favoriteArticles)
            console.log(action.payload.data.title)
        },
    }
})

export const { addFavorite } = favoritesSlice.actions;
export const selectFavoriteArticles = (state) => state.favoriteArticles;
export default favoritesSlice.reducer;