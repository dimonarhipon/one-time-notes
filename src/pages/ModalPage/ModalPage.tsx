import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useState } from 'react';
import { Status } from '@/shared/lib/EnumStatus';
import styles from './ModalPage.module.scss';

const URL = location.pathname.substring(13);

export const ModalPage = () => {
    const [noteState, SetNote] = useState<Status.Open | Status.Get | Status.Delete>(Status.Get);
    const [modalState, SetModal] = useState<boolean>(true);

    const getNote = noteState === Status.Get;
    const openNote = noteState === Status.Open;
    const deleteNote = noteState === Status.Delete;

    return <ModalTemplate active={modalState}>
        <div className={styles.navigationСontainer}>
            <ModalTitle noteState={noteState} />
            {openNote && (
                <button className={styles.navigationOpen}>
                    <svg className={styles.navigationImg} viewBox='0 0 1024 1024' onClick={() => SetNote(Status.Delete)}>
                        <path d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
                    </svg>
                </button>
            )}
        </div>

        {getNote && (
            <ModalButton callback={() => SetNote(Status.Open)}>Открыть</ModalButton>
        )}

        {openNote && (
            <Message>{URL}</Message>
        )}

        {(openNote || deleteNote) && (
            <ModalLink path='/develop/' callback={() => SetModal(false)}>Написать заметку</ModalLink>
        )}

    </ModalTemplate>;
};
