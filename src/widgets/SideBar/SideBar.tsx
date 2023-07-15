import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteButton/NoteButton';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import { SearchForNotes } from '@/shared/lib/SearchForNotes';
import { fetchNotes } from '@/shared/api/fetchNotes';
import Preloader from '../Preloader/Preloader';
import { sortByDate } from '@/shared/lib/sortByDate';

const SideBar = () => {
	const mockApiNotesUrl = 'https://64aff776c60b8f941af4f841.mockapi.io/server/notes';

	const [loading, setLoading] = useState<boolean>(true);
	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [searchNotes, setSearchNotes] = useState<NoteType[]>([]);
	const [activeNote, setActiveNote] = useState<number>(-1);

	const removeNote = (event: any) => {
		const thisNoteId: string = event.currentTarget.parentElement.parentElement.id;
		setLoading(true);

		fetchNotes(`${mockApiNotesUrl}/${thisNoteId}`, 'DELETE').then(() => {
			const resultNotes = userNotes.filter((note) => note.noteId !== thisNoteId);

			setLoading(false);
			setUserNotes(resultNotes);
			setSearchNotes(resultNotes);
		});
		// TASK обработка ошибки, вызов модального окна
	};

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
					callback={(event) => {
						SearchForNotes({ event, userNotes, searchNotes, setSearchNotes });
					}}
					sortByDate={() => {
						const sortNotes = sortByDate(userNotes);
						setUserNotes(sortNotes);
						setSearchNotes(sortNotes);
					}}
				/>
				<h2 className={styles.title}>Мои заметки</h2>
				{loading && <Preloader />}
			</div>
			<div className={styles.notes}>
				{!loading && userNotes.length === 0 && <p className={styles.empty}>Заметок пока нет</p>}
				{userNotes.length > 0 &&
					searchNotes.map((note, index) => (
						<NoteButton
							key={note.noteId}
							note={note}
							active={index === activeNote}
							openNoteFunction={() => setActiveNote(index)}
							removeNoteFunction={removeNote}
						/>
					))}
				{searchNotes.length === 0 && !loading && (
					<p className={styles.empty}>Поиск не дал результатов</p>
				)}
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
