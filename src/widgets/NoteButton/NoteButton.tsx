import styles from './noteButton.module.scss';
import { NoteButtonProps } from '@/widgets/NoteButton/INoteButton';

export function NoteButton(props: NoteButtonProps) {
	return (
		<div
			className={props.active ? [styles.note, styles.active].join(' ') : styles.note}
			id={props.note.noteId}
			onClick={props.callback}
		>
			<h3 className={styles.title}>{props.note.noteTitle}</h3>
			<p className={styles.date}>{props.note.noteDate}</p>
		</div>
	);
}

export default NoteButton;
