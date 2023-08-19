import styles from './NotesPage.module.scss';
import SideBar from '@/widgets/SideBar/SideBar';
import UpdateNote from '@/widgets/UpdateNote/UpdateNote';
import Header from '@/widgets/Header/Header';

const NotesPage = () => {
	return (
		<div className={styles.notes}>
			<SideBar className={styles.sidebar} />
			<Header className={styles.header} />
			<UpdateNote className={styles.content}/>
		</div>
	);
};

export default NotesPage;
