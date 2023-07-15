import ButtonCopy from '@/widgets/ButtonCopy/ButtonCopy';

import styles from './NoteCreatedModal.module.scss';

const NoteCreatedModal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.title}>Заметка создана</div>

			<ButtonCopy />

			<div className={styles.link}>
				https://www.ntkek.com/mnH6gHViIdAZlnMz8id=3-27&mode=design&t=wkRhKHX0MpON7tvD-0
			</div>
		</div>
	);
};

export default NoteCreatedModal;
