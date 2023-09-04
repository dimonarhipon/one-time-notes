import { useState } from 'react';

import ButtonCopy from '@/features/ButtonCopy/ButtonCopy';

import styles from './NoteCreatedModal.module.scss';

const NoteCreatedModal = ({setIsCopyed}) => {
	const [link, setLink] = useState('https://www.ntkek.com/mnH6gHViIdAZlnMz8id=3-27&mode=design&t=wkRhKHX0MpON7tvD-0');

	function copyToClick() {
		setIsCopyed(true);
		return navigator.clipboard.writeText(link);
	}

	return (
		<>
			<div className={styles.title}>Заметка создана</div>

			<ButtonCopy copyToClick={copyToClick}/>

			<div className={styles.link} onClick={() => copyToClick()}>
				{link}
			</div>
		</>
	);
};

export default NoteCreatedModal;
