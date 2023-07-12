import styles from './noteButton.module.scss';
import { NoteButtonProps } from './NoteButtonType';

const NoteButton = ({ note, active, callback }: NoteButtonProps) => {
	return (
		<div
			className={active ? [styles.note, styles.active].join(' ') : styles.note}
			id={note.noteId}
			onClick={callback}
		>
			<h3 className={styles.title}>{note.noteTitle}</h3>
			<p className={styles.date}>{note.noteDate}</p>
		</div>
	);
};

export default NoteButton;
