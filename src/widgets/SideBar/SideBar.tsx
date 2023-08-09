import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import myFetch from '@/shared/api/myFetch';
import useDebounce from '@/shared/lib/useDebounce';

const myNotes = 'Мои заметки';
const noNotes = 'Заметок пока нет';
const noSearch = 'Поиск не дал результатов';

const db_url = import.meta.env.VITE_BACKEND_URL;

const SideBar = () => {
	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [searchNotes, setSearchNotes] = useState<NoteType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [activeNote, setActiveNote] = useState<number>(-1);
	const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.default);
	const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.default);
	const [error, setError] = useState<boolean | string>(false);

	// const dispatch = useDispatch();

	useEffect(() => {
		myFetch
			.get(`${db_url}api/notes`)
			.then((response) => {
				setUserNotes(response);
				setSearchNotes(response);
				setLoading(false);
				setError(false);
			})
			.catch((error) => {
				setError(error.status);
			});
	}, []);

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header}>
				<Search
					searchForNotes={(event) => {
						searchForNotes({ event, userNotes, searchNotes, setSearchNotes });
					}}
					sortByDate={() => {
						sortNotesByDate({ userNotes, sortByDate, setSearchNotes, setSortByDate });
					}}
					sortByCompleted={() => {
						sortNotesByCompleted({
							userNotes,
							sortByCompleted,
							setSearchNotes,
							setSortByCompleted,
						});
					}}
					stateDate={sortByDate}
					stateCompleted={sortByCompleted}
				/>
				<h2 className={styles.title}>{myNotes}</h2>
				{loading && <Preloader />}
			</div>
			<div className={styles.notes}>
				{!loading && userNotes.length === 0 && <p className={styles.empty}>{noNotes}</p>}
				{!loading && userNotes.length > 0 && searchNotes.length === 0 && (
					<p className={styles.empty}>{noSearch}</p>
				)}
				{userNotes.length > 0 &&
					searchNotes.map((note, index) => (
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
									userNotes,
									setUserNotes,
									setSearchNotes,
								});
							}}
						/>
					))}
			</div>
			<AddButton
				addNote={() => {
					addNote({ userNotes, setUserNotes, setSearchNotes, db_url });
				}}
			/>
		</aside>
	);
};

export default SideBar;
