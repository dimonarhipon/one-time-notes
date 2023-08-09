import {configureStore} from '@reduxjs/toolkit';
import notesReducer from './notes.slice';

export default configureStore({
	reducer: {
		notes: notesReducer,
		// activeNote: activeNoteReducer,
		// user: userReducer,
	}
});

