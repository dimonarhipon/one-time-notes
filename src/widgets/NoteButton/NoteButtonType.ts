import NoteType from '@/shared/lib/NoteType';

export type NoteButtonProps = {
	note: NoteType,
	active: boolean,
	callback: () => void;
};
