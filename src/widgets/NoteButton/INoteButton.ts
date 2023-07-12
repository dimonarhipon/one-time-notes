export type NoteButtonProps = {
	noteId: string,
	noteTitle: string,
	noteDate: string,
	active: boolean,
	callback: () => void;
};
