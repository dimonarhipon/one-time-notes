import { useEffect, useState } from 'react';
import NoteButton from '@/widgets/NoteButton/NoteButton';
import Search from '@/widgets/Search/Search';
import styles from './sideBar.module.scss';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';

const SideBar = () => {
	const notesData: NoteType[] = [
		{
			noteId: '1',
			noteTitle: 'Title1',
			noteDate: '23.03.2023',
		},
		{
			noteId: '2',
			noteTitle: 'Title2',
			noteDate: '23.03.2023',
		},
		{
			noteId: '3',
			noteTitle: 'Title3',
			noteDate: '23.03.2023',
		},
		{
			noteId: '4',
			noteTitle: 'Title4',
			noteDate: '23.03.2023',
		},
	];

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [activeNote, setActiveNote] = useState<number>(-1);

	useEffect(() => {
		setUserNotes(notesData);
	}, []);

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header}>
				<Search />
				<h2 className={styles.title}>Мои заметки</h2>
			</div>
			<div className={styles.notes}>
				{userNotes.map((note, index) => (
					<NoteButton
						key={note.noteId}
						note={note}
						active={index === activeNote}
						callback={() => setActiveNote(index)}
					/>
				))}
			</div>
			<AddButton callback={() => console.log('New note has been created')} />
		</aside>
	);
};

export default SideBar;
