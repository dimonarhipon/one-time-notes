import styles from './NotesPage.module.scss';
import SideBar from '@/widgets/SideBar/SideBar';
import UpdateNote from '@/widgets/UpdateNote/UpdateNote';
import Header from '@/widgets/Header/Header';

const NotesPage = () => {
	return (
		<div className={styles.notes}>
			<Header className={styles.header} />
			<SideBar className={styles.sidebar} />
			<UpdateNote className={styles.content} />
		</div>
	);
};

export default NotesPage;
