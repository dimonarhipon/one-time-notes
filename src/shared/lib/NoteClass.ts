const defaultNoteTitle = 'Новая заметка';

export class Note {
	noteId?: string;
	noteTitle: string;
	noteText: string;
	noteDate: string;
	noteStatus: boolean;

	constructor(noteTitle = defaultNoteTitle) {
		this.noteId = '';
		this.noteText = '';
		this.noteTitle = noteTitle;
		this.noteDate = new Date().toISOString();
		this.noteStatus = false;
	}
}
