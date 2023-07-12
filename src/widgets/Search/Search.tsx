import styles from './search.module.scss';
import searchIcon from './img/search.svg';

const Search = () => {
	return (
		<div className={styles.search}>
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
		</div>
	);
};

export default Search;
