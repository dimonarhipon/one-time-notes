import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useState } from 'react';

import styles from './ModalPage.module.scss';

const STATUS_OPEN = 'open';
const STATUS_CLOSE = 'close';
const STATUS_DELETE = 'delete';

const testData =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime tempora praesentium est dicta similique beatae aliquid fugiat provident error commodi odit accusantium ipsa inventore expedita non explicabo tenetur, dignissimos corrupti?';

export const ModalPage = () => {
	const [noteState, SetNote] = useState<'open' | 'close' | 'delete'>('close');
	const [modalState, SetModal] = useState<boolean>(true);

	const openNote = noteState === STATUS_OPEN;
	const closeNote = noteState === STATUS_CLOSE;
	const deleteNote = noteState === STATUS_DELETE;

	const getModalTitle = () => {
		return openNote ? 'Заметка будет удалена' : closeNote ? 'Заметка получена' : 'Заметка удалена';
	};

	return (
		<ModalTemplate active={modalState}>
			<div className={styles.navigationСontainer}>
				<ModalTitle>{getModalTitle()}</ModalTitle>
				{openNote && (
					<button className={styles.navigationСlose}>
						<svg
							className={styles.navigationImg}
							viewBox='0 0 1024 1024'
							onClick={() => SetNote(STATUS_DELETE)}
						>
							<path d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
						</svg>
					</button>
				)}
			</div>
			{closeNote && <ModalButton callback={() => SetNote(STATUS_OPEN)}>Открыть</ModalButton>}
			{openNote && <Message>{testData.repeat(10)}</Message>}
			{(openNote || deleteNote) && (
				<ModalLink callback={() => SetModal(false)}>Написать заметку</ModalLink>
			)}
		</ModalTemplate>
	);
};
