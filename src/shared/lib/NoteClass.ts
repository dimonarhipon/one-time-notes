export class Note {
	noteId?: string;
	noteTitle: string;
	noteText: string;
	noteDate: string;
	noteStatus: boolean;

	constructor(noteTitle = 'Новая заметка'){
		this.noteId = '';
		this.noteText = '';
		this.noteTitle = noteTitle;
		this.noteDate = new Date().toISOString();
		this.noteStatus = false;
	}
}
