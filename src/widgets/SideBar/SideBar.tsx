import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteButton from '@/widgets/NoteButton/NoteButton';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import { SearchForNotes } from '@/shared/lib/SearchForNotes';

const notesData: NoteType[] = [
	{
		noteId: '1',
		noteTitle: 'Длинное название',
		noteText: 'Some text in Note',
		noteDate: '01.01.2023',
		noteStatus: true,
	},
	{
		noteId: '2',
		noteTitle: 'Супер длинное название заметки',
		noteText: 'Some text in Note',
		noteDate: '17.03.2022',
		noteStatus: true,
	},
	{
		noteId: '3',
		noteTitle: 'Title3',
		noteText: 'Some text in Note',
		noteDate: '31.12.1981',
		noteStatus: false,
	},
	{
		noteId: '4',
		noteTitle: 'Title4',
		noteText: 'Some text in Note',
		noteDate: '25.07.1792',
		noteStatus: true,
	},
	{
		noteId: '5',
		noteTitle: 'Какой то текст',
		noteText: 'Some text in Note',
		noteDate: '25.07.1792',
		noteStatus: false,
	},
	{
		noteId: '6',
		noteTitle: 'Заметка',
		noteText: 'Some text in Note',
		noteDate: '25.07.1792',
		noteStatus: true,
	},
	{
		noteId: '7',
		noteTitle: 'Очередная заметка',
		noteText: 'Some text in Note',
		noteDate: '25.07.1792',
		noteStatus: false,
	},
	{
		noteId: '8',
		noteTitle: 'Последняя заметка',
		noteText: 'Some text in Note',
		noteDate: '25.07.1792',
		noteStatus: true,
	},
];

const SideBar = () => {
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
				{userNotes.length === 0 && <p className={styles.empty}>Заметок пока нет</p>}
				{userNotes.length > 0 &&
					searchNotes.map((note, index) => (
						<NoteButton
							key={note.noteId}
							note={note}
							active={index === activeNote}
							openNoteFunction={() => setActiveNote(index)}
							removeNoteFunction={() => {
								// TASK доделать удаление заметки
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
