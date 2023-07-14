import NoteType from '@/shared/lib/NoteType';
import { MouseEventHandler } from 'react';

export type NoteButtonProps = {
	note: NoteType;
	active: boolean;
	openNoteFunction: () => void;
	removeNoteFunction: (event: unknown) => void;
};
