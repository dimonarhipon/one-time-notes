import TNoteType from '@/shared/lib/NoteType';
import { createSlice } from '@reduxjs/toolkit';

const notes:TNoteType[] = [];


const notesSlice = createSlice({
	name: 'notes',
	initialState: {
		notes,
	},
	reducers: {
		getNotes(state, action) {
			console.log(action.payload);
			state.notes = action.payload;
		},
	},
});

export const {getNotes} = notesSlice.actions;

export default notesSlice.reducer;
