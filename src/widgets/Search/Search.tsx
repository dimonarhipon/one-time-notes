import styles from './Search.module.scss';
import { ChangeEvent } from 'react';
import { SortByDate } from '@/shared/lib/sortByDate';
import { SortByCompleted } from '@/shared/lib/sortByCompleted';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';
import { useTranslation } from 'react-i18next';

type TSearchProps = {
	searchForNotes: (event: ChangeEvent<HTMLInputElement>) => void;
	sortByDate: () => void;
	sortByCompleted: () => void;
	stateDate: SortByDate;
	stateCompleted: SortByCompleted;
};

const Search = ({
	searchForNotes,
	sortByDate,
	sortByCompleted,
	stateDate,
	stateCompleted,
}: TSearchProps) => {
	const { t } = useTranslation();
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
					placeholder={t('placeholderSearch')}
					onChange={searchForNotes}
				/>
				<button
					className={styles.searchButton}
					type='button'
					onClick={(event) => event.preventDefault()}
				>
					<SvgIcon name={IconName.Search} className={styles.searchIcon} />
				</button>
			</div>
			<div className={styles.sorts}>
				<button className={isSortByDate} onClick={sortByDate}>
					{t('filterDate')}
				</button>
				<button className={isSortByCompleted} onClick={sortByCompleted}>
					{t('filterColor')}
				</button>
			</div>
		</div>
	);
};

export default Search;
