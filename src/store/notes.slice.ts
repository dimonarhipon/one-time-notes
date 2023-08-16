import TNoteType from '@/shared/lib/NoteType';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import myFetch from '@/shared/api/myFetch';

const db_url = import.meta.env.VITE_BACKEND_URL;

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
	async function(_, {rejectWithValue}) {
		try {
			const response: any = await myFetch.get(`${db_url}api/notes`);
			const result = response.json();
			return result;
		} catch (error: any) {
			return rejectWithValue(error.message);
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
