import styles from './AddButton.module.scss';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';

type TAddButtonProps = {
	addNote: () => void;
};

const addText = 'Добавить заметку';

const AddButton = ({ addNote }: TAddButtonProps) => {
	return (
		<button className={styles.add} onClick={addNote}>
			<SvgIcon name={IconName.Add} ariaLabel={addText} />
		</button>
	);
};

export default AddButton;
