import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteItem/NoteItem';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import Preloader from '@/shared/Preloader/Preloader';
import { removeNote } from '@/shared/lib/removeNote';
import { SortByDate, sortNotesByDate } from '@/shared/lib/sortByDate';
import { SortByCompleted, sortNotesByCompleted } from '@/shared/lib/sortByCompleted';
import { addNote } from '@/shared/lib/addNote';
import { searchForNotes } from '@/shared/lib/searchForNotes';
import { getNotesFromDB, addNotes, assignNotes } from '@/store/notes.slice';
import TNoteType from '@/shared/lib/NoteType';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const myNotes = 'Мои заметки';
const noNotes = 'Заметок пока нет';
const noSearch = 'Поиск не дал результатов';

const db_url = import.meta.env.VITE_BACKEND_URL;

const SideBar = () => {
	const notes = useAppSelector((state) => state.notes.notes);
	const { status, error } = useAppSelector((state) => state.notes);

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [activeNote, setActiveNote] = useState<number>(-1);
	const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.default);
	const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.default);

	const isNoNotes = status === 'fulfilled' && notes.length === 0;
	const isNoSearch = status === 'fulfilled' && userNotes.length === 0;

	const dispatch = useAppDispatch();

	const assignNotesInRedux = (notes: TNoteType[]) => {
		dispatch(assignNotes(notes));
	};

	useEffect(() => {
		const getNotes = async () => {
			const response = await dispatch(getNotesFromDB());
			const result = response.payload;
			console.log(result);

			setUserNotes(result);
		};

		getNotes();
	}, [dispatch]);

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header}>
				<Search
					searchForNotes={(event) => {
						searchForNotes({ event, notes, setUserNotes });
					}}
					sortByDate={() => {
						sortNotesByDate({ notes, sortByDate, setUserNotes, setSortByDate });
					}}
					sortByCompleted={() => {
						sortNotesByCompleted({
							notes,
							setUserNotes,
							sortByCompleted,
							setSortByCompleted,
						});
					}}
					stateDate={sortByDate}
					stateCompleted={sortByCompleted}
				/>
				<h2 className={styles.title}>{myNotes}</h2>
				{status === 'loading' && <Preloader />}
			</div>
			<div className={styles.notes}>
				{isNoNotes && <p className={styles.empty}>{noNotes}</p>}
				{isNoSearch && <p className={styles.empty}>{noSearch}</p>}

				{notes.length > 0 &&
					userNotes
						.slice()
						.reverse()
						.map((note, index) => (
							<NoteButton
								key={index}
								note={note}
								active={index === activeNote}
								openNoteFunction={() => setActiveNote(index)}
								removeNoteFunction={() => {
									const id = note._id;
									removeNote({
										id,
										db_url,
										notes,
										setUserNotes,
										assignNotesInRedux,
									});
								}}
							/>
						))}
			</div>
			<AddButton
				addNote={() => {
					addNote({ notes, db_url, setUserNotes, assignNotesInRedux });
				}}
			/>
		</aside>
	);
};

export default SideBar;
