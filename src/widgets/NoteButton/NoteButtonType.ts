import NoteType from '@/shared/lib/NoteType';

export type NoteButtonProps = {
	note: NoteType,
	active: boolean,
	openNoteFunction: () => void;
	removeNoteFunction: (event:any, userNotes:NoteType[]) => void;
};
