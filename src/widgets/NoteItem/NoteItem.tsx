import NoteType from '@/shared/lib/NoteType';
import styles from './NoteItem.module.scss';
// import { Link } from 'react-router-dom';

type TNoteButtonProps = {
	note: NoteType;
	active: boolean;
	openNoteFunction: () => void;
	removeNoteFunction: () => void;
};

const removeText = 'remove';

const NoteItem = ({ note, active, openNoteFunction, removeNoteFunction }: TNoteButtonProps) => {
	const isActive = active ? [styles.note, styles.active].join(' ') : styles.note;
	const isRead = note.isRead === true ? [styles.read] : '';

	// нормальная дата последнего обновления
	const date = new Date(note.updatedAt).toLocaleDateString();

	return (
		// <Link to={`./${note._id}`} className={`${isActive} ${isRead}`} onClick={openNoteFunction}>
		<div className={`${isActive} ${isRead}`} onClick={openNoteFunction}>
			<div className={styles.header}>
				<h3 className={styles.title}>{note.title}</h3>
				<button className={styles.removeButton} onClick={removeNoteFunction} type='button'>
					<svg viewBox='0 0 24 25' className={styles.removeIcon} aria-label={removeText}>
						<path d='M20.9999 7.54394H20.9199C15.6299 7.01394 10.3499 6.81394 5.11992 7.34394L3.07992 7.54394C2.98068 7.55429 2.88037 7.54487 2.7848 7.51623C2.68923 7.48758 2.60028 7.44027 2.5231 7.37704C2.44592 7.31381 2.38204 7.23591 2.33515 7.14784C2.28826 7.05977 2.25929 6.96327 2.24992 6.86394C2.20992 6.44394 2.50992 6.08394 2.91992 6.04394L4.95992 5.84394C10.2799 5.30394 15.6699 5.51394 21.0699 6.04394C21.4799 6.08394 21.7799 6.45394 21.7399 6.86394C21.7248 7.04962 21.6402 7.22278 21.5031 7.34883C21.3659 7.47488 21.1862 7.54455 20.9999 7.54394Z' />
						<path d='M8.4999 6.53396C8.4599 6.53396 8.4199 6.53397 8.3699 6.52396C8.17588 6.489 8.00332 6.37934 7.88926 6.21855C7.77521 6.05775 7.72876 5.85863 7.7599 5.66396L7.9799 4.35396C8.1399 3.39396 8.3599 2.06396 10.6899 2.06396H13.3099C15.6499 2.06396 15.8699 3.44396 16.0199 4.36396L16.2399 5.66396C16.3099 6.07396 16.0299 6.46396 15.6299 6.52396C15.2199 6.59397 14.8299 6.31396 14.7699 5.91396L14.5499 4.61396C14.4099 3.74396 14.3799 3.57396 13.3199 3.57396H10.6999C9.6399 3.57396 9.6199 3.71396 9.4699 4.60396L9.2399 5.90396C9.21141 6.07972 9.12132 6.23962 8.98574 6.35504C8.85017 6.47046 8.67795 6.53388 8.4999 6.53396ZM15.2099 23.566H8.7899C5.2999 23.566 5.1599 21.636 5.0499 20.076L4.3999 10.006C4.3699 9.59597 4.6899 9.23597 5.0999 9.20597C5.5199 9.18597 5.8699 9.49597 5.8999 9.90596L6.5499 19.976C6.6599 21.496 6.6999 22.066 8.7899 22.066H15.2099C17.3099 22.066 17.3499 21.496 17.4499 19.976L18.0999 9.90596C18.1299 9.49597 18.4899 9.18597 18.8999 9.20597C19.3099 9.23597 19.6299 9.58597 19.5999 10.006L18.9499 20.076C18.8399 21.636 18.6999 23.566 15.2099 23.566Z' />
						<path d='M13.66 18.064H10.33C9.92 18.064 9.58 17.724 9.58 17.314C9.58 16.904 9.92 16.564 10.33 16.564H13.66C14.07 16.564 14.41 16.904 14.41 17.314C14.41 17.724 14.07 18.064 13.66 18.064ZM14.5 14.064H9.5C9.09 14.064 8.75 13.724 8.75 13.314C8.75 12.904 9.09 12.564 9.5 12.564H14.5C14.91 12.564 15.25 12.904 15.25 13.314C15.25 13.724 14.91 14.064 14.5 14.064Z' />
					</svg>
				</button>
			</div>
			{date && (
				<time className={styles.date} dateTime={note.updatedAt}>
					{date}
				</time>
			)}
		</div>
		// </Link>
	);
};

export default NoteItem;
