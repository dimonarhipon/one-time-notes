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

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
