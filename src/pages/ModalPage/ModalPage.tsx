import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useEffect, useState } from 'react';
import { modalMethods } from '@/shared/lib/modalMethods';
import { ModalWrapper } from '@/widgets/ModalWrapper/ModalWrapper';
import { ErrorContent } from '@/widgets/ModuleError/ErrorContent';
import { DeleteNote, FULL_PATH, ReadNote } from './utils';
import { TGetNote } from '@/shared/lib/TGetNote';
import styles from './ModalPage.module.scss';
import { Loader, SvgIcon } from '@/shared';
import axios from 'axios';
import { AppRoute, IconName } from '@/shared/contants';

export const ModalPage = () => {
	const [noteState, SetNote] = useState<modalMethods.Open | modalMethods.Get | modalMethods.Delete>(
		modalMethods.Get,
	);
	const [fetchState, SetFetch] = useState<TGetNote | modalMethods.Error>();

	useEffect(() => {
		axios
			.get(FULL_PATH)
			.then((note) => {
				note.data.name ? SetFetch(modalMethods.Error) : SetFetch(note.data);
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
								<SvgIcon name={IconName.Close} width='42' height='42' className={styles.navigationImg} />
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

			{(openNote || deleteNote) && <ModalLink path={AppRoute.Root}>Написать заметку</ModalLink>}
		</ModalTemplate>
	);
};
