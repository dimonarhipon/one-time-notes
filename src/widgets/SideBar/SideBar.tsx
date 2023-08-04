import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteItem/NoteItem';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import Preloader from '@/shared/Preloader/Preloader';
import { fetchNotes } from '@/shared/api/fetchNotes';
import { removeNote } from '@/shared/lib/removeNote';
import { SortByDate, sortNotesByDate } from '@/shared/lib/sortByDate';
import { SortByCompleted, sortNotesByCompleted } from '@/shared/lib/sortByCompleted';
import { addNote } from '@/shared/lib/addNote';
import { searchForNotes } from '@/shared/lib/searchForNotes';

const myNotes = 'Мои заметки';
const noNotes = 'Заметок пока нет';
const noSearch = 'Поиск не дал результатов';

const SideBar = () => {
	const mockApiNotesUrl = 'https://64aff776c60b8f941af4f841.mockapi.io/server/notes';

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [searchNotes, setSearchNotes] = useState<NoteType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [activeNote, setActiveNote] = useState<number>(-1);
	const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.default);
	const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.default);

	useEffect(() => {
		fetchNotes(mockApiNotesUrl).then((notes) => {
			setUserNotes(notes);
			setLoading(false);
			setSearchNotes(notes);
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
							key={note.noteId}
							note={note}
							active={index === activeNote}
							openNoteFunction={() => setActiveNote(index)}
							removeNoteFunction={() => {
								const noteId = note.noteId;
								removeNote({
									noteId,
									mockApiNotesUrl,
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
					addNote({ userNotes, setUserNotes, setSearchNotes, mockApiNotesUrl });
				}}
			/>
		</aside>
	);
};

export default SideBar;
