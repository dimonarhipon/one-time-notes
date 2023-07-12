import styles from './search.module.css';
import searchIcon from './img/search.svg';

export default function Search() {
	return (
		<form className={styles.search} method='post' action='#'>
			<input type='text' className={styles.searchInput} placeholder='Найти заметку...' />
			<button
				className={styles.searchButton}
				type='button'
				onClick={(event) => {
					event.preventDefault();
					console.log('Submit search');
				}}
			>
				<img className={styles.searchIcon} src={searchIcon} alt='Поиск' />
			</button>
		</form>
	);
}
