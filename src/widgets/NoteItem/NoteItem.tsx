import NoteType from '@/shared/lib/NoteType';
import styles from './NoteItem.module.scss';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName, Theme } from '@/shared/contants';

type TNoteButtonProps = {
	note: NoteType;
	active: boolean;
	openNoteFunction: () => void;
	removeNoteFunction: () => void;
};

const removeText = 'Удалить заметку';

const NoteItem = ({ note, active, openNoteFunction, removeNoteFunction }: TNoteButtonProps) => {
	const isActive = active ? [styles.note, styles.active].join(' ') : styles.note;
	const isRead = note.isRead === true ? [styles.read] : '';

	// нормальная дата последнего обновления
	const date = new Date(note.updatedAt).toLocaleDateString();

	return (
		<div className={`${isActive} ${isRead}`} onClick={openNoteFunction}>
			<div className={styles.header}>
				<h3 className={styles.title}>{note.title}</h3>
				<button className={styles.removeButton} onClick={removeNoteFunction} type='button'>
					<SvgIcon name={IconName.Delete} width='16' height='16' aria-label={removeText} fill={isRead ? Theme.Dark : Theme.Light} />
				</button>
			</div>
			{date && (
				<time className={styles.date} dateTime={note.updatedAt}>
					{date}
				</time>
			)}
		</div>
	);
};

export default NoteItem;
