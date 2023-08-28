import TNoteType from '@/shared/lib/NoteType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const db_url = import.meta.env.VITE_BACKEND_URL;
const NOTES_URL = `${db_url}api/notes`;

type initialStateType = {
	notes: TNoteType[],
	status: null | string,
	error: null | string;
};

const initialState: initialStateType = {
		notes: [],
		status: null,
		error: null,
};

export const getNotesFromDB = createAsyncThunk(
	'notes/getNotesFromDB',
	async function() {
		try {
			const response = await axios.get(NOTES_URL);
			const result = response.data;
			return result;
		} catch (error) {
			if(axios.isAxiosError(error)){
				throw new Error(`${error.response?.status}, ${error.response?.statusText}`);
			}
		}
	}
);

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNotes (state, action) {
			state.notes.push(action.payload);
		},
		assignNotes (state, action) {
			state.notes = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getNotesFromDB.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(getNotesFromDB.fulfilled, (state, action) => {
			state.notes = action.payload;
			state.status = 'fulfilled';
		});
		builder.addCase(getNotesFromDB.rejected, (state, action) => {
			const error: any = action.payload;
			state.status = 'rejected';
			state.error = error;
		});
	},
});

export const  {addNotes, assignNotes} = notesSlice.actions;

export default notesSlice.reducer;
