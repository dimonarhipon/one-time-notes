import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteButton/NoteButton';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import Preloader from '../Preloader/Preloader';
import { SearchForNotes } from '@/shared/lib/SearchForNotes';
import { fetchNotes } from '@/shared/api/fetchNotes';
import { SortBy, sortByDate } from '@/shared/lib/sortByDate';
import { removeNote } from '@/shared/lib/removeNote';

const SideBar = () => {
	const mockApiNotesUrl = 'https://64aff776c60b8f941af4f841.mockapi.io/server/notes';

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [searchNotes, setSearchNotes] = useState<NoteType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [activeNote, setActiveNote] = useState<number>(-1);
	const [sortBy, setSortBy] = useState<SortBy>(SortBy.default);

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
					searchFunction={(event) => {
						SearchForNotes({ event, userNotes, searchNotes, setSearchNotes });
					}}
					sortByDate={() => {
						sortByDate({ userNotes, sortBy, setSearchNotes, setSortBy });
					}}
				/>
				<h2 className={styles.title}>Мои заметки</h2>
				{loading && <Preloader />}
			</div>
			<div className={styles.notes}>
				{!loading && userNotes.length === 0 && <p className={styles.empty}>Заметок пока нет</p>}
				{!loading && userNotes.length > 0 && searchNotes.length === 0 && (
					<p className={styles.empty}>Поиск не дал результатов</p>
				)}
				{userNotes.length > 0 &&
					searchNotes.map((note, index) => (
						<NoteButton
							key={note.noteId}
							note={note}
							active={index === activeNote}
							openNoteFunction={() => setActiveNote(index)}
							removeNoteFunction={(event) =>
								removeNote({
									event,
									mockApiNotesUrl,
									userNotes,
									setUserNotes,
									setSearchNotes,
									setLoading,
								})
							}
						/>
					))}
			</div>
			<AddButton
				callback={() => {
					// добавление
				}}
			/>
		</aside>
	);
};

export default SideBar;
