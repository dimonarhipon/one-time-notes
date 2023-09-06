import styles from './Search.module.scss';
import { ChangeEvent } from 'react';
import { SortByDate } from '@/shared/lib/sortByDate';
import { SortByCompleted } from '@/shared/lib/sortByCompleted';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName, Theme } from '@/shared/contants';

type TSearchProps = {
	searchForNotes: (event: ChangeEvent<HTMLInputElement>) => void;
	sortByDate: () => void;
	sortByCompleted: () => void;
	stateDate: SortByDate;
	stateCompleted: SortByCompleted;
};

const inputPlaceholder = 'Найти заметку...';

const Search = ({
	searchForNotes,
	sortByDate,
	sortByCompleted,
	stateDate,
	stateCompleted,
}: TSearchProps) => {
	const isSortByDate =
		stateDate === SortByDate.early || stateDate === SortByDate.late
			? [styles.sortButton, styles.active].join(' ')
			: styles.sortButton;

	const isSortByCompleted =
		stateCompleted === SortByCompleted.read || stateCompleted === SortByCompleted.unread
			? [styles.sortButton, styles.active].join(' ')
			: styles.sortButton;

	return (
		<div className={styles.search}>
			<div className={styles.input}>
				<label htmlFor='search' className={styles.visuallyHidden}>
					Поиск по заметкам
				</label>
				<input
					type='search'
					id='search'
					name='search'
					className={styles.searchInput}
					placeholder={inputPlaceholder}
					onChange={searchForNotes}
				/>
				<button
					className={styles.searchButton}
					type='button'
					onClick={(event) => event.preventDefault()}
				>
					<SvgIcon name={IconName.Search} fill={Theme.Light} />
				</button>
			</div>
			<div className={styles.sorts}>
				<button className={isSortByDate} onClick={sortByDate}>
					По дате
				</button>
				<button className={isSortByCompleted} onClick={sortByCompleted}>
					По цвету
				</button>
			</div>
		</div>
	);
};

export default Search;
