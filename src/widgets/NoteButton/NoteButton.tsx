import styles from './notebutton.module.css';
import { NoteButtonProps } from '@/widgets/NoteButton/INoteButton';

export function NoteButton(props: NoteButtonProps) {
	return (
		<div
			className={props.active ? [styles.note, styles.active].join(' ') : styles.note}
			id={props.noteId}
			onClick={props.callback}
		>
			<h3 className={styles.title}>{props.noteTitle}</h3>
			<p className={styles.date}>{props.noteDate}</p>
		</div>
	);
}

export default NoteButton;
