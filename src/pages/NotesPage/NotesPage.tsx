import styles from './notesPage.module.scss';
import SideBar from '@/widgets/SideBar/SideBar';
import Note from '@/widgets/Note/Note';

const NotesPage = () => {
	return (
		<div className={styles.notes}>
			<SideBar />
			<Note />
		</div>
	);
};

export default NotesPage;
