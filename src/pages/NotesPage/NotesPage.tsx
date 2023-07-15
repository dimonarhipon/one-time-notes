import styles from './notesPage.module.scss';
import SideBar from '@/widgets/SideBar/SideBar';
import UpdateNote from '@/widgets/UpdateNote/UpdateNote';

const NotesPage = () => {
	return (
		<div className={styles.notes}>
			<SideBar />
			<UpdateNote />
		</div>
	);
};

export default NotesPage;
