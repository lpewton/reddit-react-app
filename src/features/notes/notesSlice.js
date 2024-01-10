import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        removeNote: (state, action) => {
            return state.filter(note => note.id !== action.payload.id)
        }
    }
})

export const selectNotes = (state) => state.notes;
export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;