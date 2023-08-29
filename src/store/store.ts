import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notes.slice';

const store = configureStore({
	reducer: {
		notes: notesReducer,
		// activeNote: activeNoteReducer,
		// user: userReducer,
	}
});

export default store;
