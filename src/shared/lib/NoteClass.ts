import NoteType from './NoteType';

export class Note {
	noteId: string;
	noteTitle: string;
	noteText: string;
	noteDate: string;
	noteStatus: boolean;

	constructor({noteId, noteTitle, noteText, noteDate, noteStatus}: NoteType){
		this.noteId = noteId;
		this.noteText = noteText;
		this.noteTitle = noteTitle;
		this.noteDate = noteDate;
		this.noteStatus = noteStatus;
	}
}
