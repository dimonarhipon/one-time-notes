export interface NoteButtonProps {
	note: {
		noteId: string,
		noteTitle: string,
		noteDate: string,
	},
	active: boolean,
	callback: () => void;
}
