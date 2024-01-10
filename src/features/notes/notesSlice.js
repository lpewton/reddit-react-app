import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const selectNotes = (state) => state.notes;
export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;