import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useEffect, useState } from 'react';
import { modalMethods } from '@/shared/lib/modalMethods';
import { ModalWrapper } from '@/widgets/ModalWrapper/ModalWrapper';
import { ErrorContent } from '@/widgets/ModuleError/ErrorContent';
import { BACKEND_URL, DeleteNote, ErrorsResponse, ReadNote } from './utils';
import { TGetNote } from '@/shared/lib/TGetNote';
import styles from './ModalPage.module.scss';
import { Loader } from '@/shared/Loader';
import { useParams } from 'react-router-dom';

export const ModalPage = () => {
    const [noteState, SetNote] = useState<modalMethods.Open | modalMethods.Get | modalMethods.Delete>(modalMethods.Get);
    const [fetchState, SetFetch] = useState<TGetNote>();

    const { id } = useParams();

    useEffect(() => {
        fetch(BACKEND_URL + id).then(res => {
            switch (res.status) {
                case 200:
                    res.json().then(note => {
                        SetFetch({
                            content: note.content,
                            title: note.title,
                            author: note.author,
                            fetchStatus: res.status,
                        });
                    });
                    break;
                case 404:
                    throw new Error(ErrorsResponse.Error404);
                case 500:
                    throw new Error(ErrorsResponse.Error500);
            }
        }).catch((err) => {
            SetFetch({
                content: err.message,
                fetchStatus: 404,
            });
        });
    }, [id]);

    const getNote = noteState === modalMethods.Get;
    const openNote = noteState === modalMethods.Open;
    const deleteNote = noteState === modalMethods.Delete;

    return <ModalTemplate >
        {!fetchState && <Loader />}
        {(fetchState && fetchState?.fetchStatus !== 200) && <ErrorContent>
            {fetchState.content}
        </ErrorContent>}
        {fetchState?.fetchStatus === 200 && (
            <ModalWrapper active={!!fetchState}>
                <div className={styles.navigationСontainer}>
                    <ModalTitle noteState={noteState} />
                    {openNote && (
                        <button className={styles.navigationOpen} onClick={() => { SetNote(modalMethods.Delete); DeleteNote(BACKEND_URL + id); }}>
                            <svg className={styles.navigationImg} viewBox='0 0 1024 1024' >
                                <path d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
                            </svg>
                        </button>
                    )}
                </div>

                {getNote && (
                    <ModalButton callback={() => { SetNote(modalMethods.Open); ReadNote(`${id}`, BACKEND_URL); }}>Открыть</ModalButton>
                )}

                {openNote && (
                    <Message title={fetchState?.title}>
                        {fetchState?.content}
                    </Message>
                )}
            </ModalWrapper>)
        }

        {(openNote || deleteNote) && (
            <ModalLink path='/one-time-notes/' >Написать заметку</ModalLink>
        )}

    </ModalTemplate>;
};
