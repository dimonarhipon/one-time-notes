import { useEffect, useState } from 'react';
import styles from './SideBar.module.scss';
import NoteItem from '@/widgets/NoteItem/NoteItem';
import Search from '@/widgets/Search/Search';
import AddButton from '../AddButton/AddButton';
import NoteType from '@/shared/lib/NoteType';
import { Loader } from '@/shared/Loader';
import { removeNote } from '@/shared/lib/removeNote';
import { SortByDate, sortNotesByDate } from '@/shared/lib/sortByDate';
import { SortByCompleted, sortNotesByCompleted } from '@/shared/lib/sortByCompleted';
import { addNote } from '@/shared/lib/addNote';
import { searchForNotes } from '@/shared/lib/searchForNotes';
import { getNotesFromDB, assignNotes } from '@/store/notes.slice';
import TNoteType from '@/shared/lib/NoteType';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const fulfilledText = 'fulfilled';
const loadingText = 'loading';

type TSidebarProps = {
	className?: string;
};

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const SideBar = ({ className }: TSidebarProps) => {
	const { t } = useTranslation();
	const notes = useAppSelector((state) => state.notes.notes);
	const { status } = useAppSelector((state) => state.notes);

	const [userNotes, setUserNotes] = useState<NoteType[]>([]);
	const [activeNote, setActiveNote] = useState<number>(-1);
	const [sortByDate, setSortByDate] = useState<SortByDate>(SortByDate.default);
	const [sortByCompleted, setSortByCompleted] = useState<SortByCompleted>(SortByCompleted.default);

	const isLoading = status === loadingText;
	const isNoNotes = status === fulfilledText && notes.length === 0;
	const isNoSearch = status === fulfilledText && userNotes.length === 0;

	const dispatch = useAppDispatch();

	const assignNotesInRedux = (notes: TNoteType[]) => {
		dispatch(assignNotes(notes));
	};

	useEffect(() => {
		const getNotes = async () => {
			const response = await dispatch(getNotesFromDB());
			const result = response.payload;
			setUserNotes(result);
		};

		getNotes();
	}, [dispatch]);

	return (
		<aside className={`${styles.sidebar} ${className}`}>
			<div className={styles.header} role='complementary'>
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
				<h2 className={styles.title}>{t('h2')}</h2>
				{isLoading && <Loader />}
			</div>
			<div className={styles.notes}>
				{isNoNotes && <p className={styles.empty}>{t('noNotes')}</p>}
				{isNoSearch && <p className={styles.empty}>{t('noSearch')}</p>}

				{notes.length > 0 &&
					userNotes
						.slice()
						.reverse()
						.map((note, index) => (
							<NoteItem
								key={index}
								note={note}
								active={index === activeNote}
								openNoteFunction={() => {
									setActiveNote(index);
									<Navigate to={`./${note._id}`} />;
								}}
								removeNoteFunction={() => {
									const id = note._id;
									removeNote({
										id,
										backendUrl,
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
					addNote({ notes, backendUrl, setUserNotes, assignNotesInRedux });
				}}
			/>
		</aside>
	);
};

export default SideBar;
