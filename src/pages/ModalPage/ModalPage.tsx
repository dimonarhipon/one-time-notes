import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useEffect, useState } from 'react';
import { modalMethods } from '@/shared/lib/modalMethods';
import myFetch from '@/shared/api/myFetch';
import { ModalWrapper } from '@/widgets/ModalWrapper/ModalWrapper';
import { ErrorContent } from '@/widgets/ModuleError/ErrorContent';
import { DeleteNote, FULL_PATH, ReadNote } from './utils';
import { TGetNote } from '@/shared/lib/TGetNote';
import styles from './ModalPage.module.scss';
import { Loader } from '@/shared/Loader';

export const ModalPage = () => {
	const [noteState, SetNote] = useState<modalMethods.Open | modalMethods.Get | modalMethods.Delete>(
		modalMethods.Get,
	);
	const [fetchState, SetFetch] = useState<TGetNote | modalMethods.Error>();

	useEffect(() => {
		myFetch
			.get(FULL_PATH)
			.then((note) => {
				note.name ? SetFetch(modalMethods.Error) : SetFetch(note);
			})
			.catch(() => {
				SetFetch(modalMethods.Error);
			});
	}, []);

	const getNote = noteState === modalMethods.Get;
	const openNote = noteState === modalMethods.Open;
	const deleteNote = noteState === modalMethods.Delete;

	return (
		<ModalTemplate>
			{!fetchState && <Loader />}
			{fetchState === (modalMethods.Error || null) ? (
				<ErrorContent>Страница не найдена</ErrorContent>
			) : (
				<ModalWrapper active={!!fetchState}>
					<div className={styles.navigationСontainer}>
						<ModalTitle noteState={noteState} />
						{openNote && (
							<button
								className={styles.navigationOpen}
								onClick={() => {
									SetNote(modalMethods.Delete);
									DeleteNote();
								}}
							>
								<svg className={styles.navigationImg} viewBox='0 0 1024 1024'>
									<path d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
								</svg>
							</button>
						)}
					</div>

					{getNote && (
						<ModalButton
							callback={() => {
								SetNote(modalMethods.Open);
								ReadNote();
							}}
						>
							Открыть
						</ModalButton>
					)}

					{openNote && <Message title={fetchState?.title}>{fetchState?.content}</Message>}
				</ModalWrapper>
			)}

			{(openNote || deleteNote) && <ModalLink path='/one-time-notes/'>Написать заметку</ModalLink>}
		</ModalTemplate>
	);
};
