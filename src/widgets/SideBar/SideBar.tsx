import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteButton/NoteButton';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import { SearchForNotes } from '@/shared/lib/SearchForNotes';

const SideBar = () => {
	const notesData: NoteType[] = [
		{
			noteId: '1',
			noteTitle: 'Длинное название',
			noteDate: '01.01.2023',
			status: 'unread',
		},
		{
			noteId: '2',
			noteTitle: 'Супер длинное название заметки',
			noteDate: '17.03.2022',
			status: 'unread',
		},
		{
			noteId: '3',
			noteTitle: 'Title3',
			noteDate: '31.12.1981',
			status: 'read',
		},
		{
			noteId: '4',
			noteTitle: 'Title4',
			noteDate: '25.07.1792',
			status: 'unread',
		},
		{
			noteId: '5',
			noteTitle: 'Какой то текст',
			noteDate: '25.07.1792',
			status: 'read',
		},
		{
			noteId: '6',
			noteTitle: 'Заметка',
			noteDate: '25.07.1792',
			status: 'unread',
		},
		{
			noteId: '7',
			noteTitle: 'Очередная заметка',
			noteDate: '25.07.1792',
			status: 'read',
		},
		{
			noteId: '8',
			noteTitle: 'Последняя заметка',
			noteDate: '25.07.1792',
			status: 'unread',
		},
	];

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [searchNotes, setSearchNotes] = useState<NoteType[]>([]);
	const [activeNote, setActiveNote] = useState<number>(-1);

	useEffect(() => {
		setUserNotes(notesData);
	}, []);

	useEffect(() => {
		setSearchNotes(notesData);
	}, []);

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header}>
				<Search
					callback={(event) => {
						SearchForNotes({ event, userNotes, notesData, setSearchNotes });
					}}
				/>
				<h2 className={styles.title}>Мои заметки</h2>
			</div>
			<div className={styles.notes}>
				{searchNotes.map((note, index) => (
					<NoteButton
						key={note.noteId}
						note={note}
						active={index === activeNote}
						openNoteFunction={() => setActiveNote(index)}
						removeNoteFunction={(event) => {
							// TASK доделать удаление заметки
							return;

							// Запрос на удаление из БД
						}}
					/>
				))}
			</div>
			<AddButton
				callback={() => {
					return;
				}}
			/>
		</aside>
	);
};

export default SideBar;
