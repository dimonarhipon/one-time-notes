import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useEffect, useState } from 'react';
import { Status } from '@/shared/lib/EnumStatus';
import { fetchNotes } from '@/shared/api/fetchNotes';
import { ModalWrapper } from '@/widgets/ModalWrapper/ModalWrapper';
import { Error404 } from '@/widgets/ModuleError/Error404';
import { fetchMethods } from '@/shared/api/fetchMethods';
import Preloader from '@/shared/Preloader/Preloader';
import styles from './ModalPage.module.scss';

const PATH_ID = location.pathname.substring(20);
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api/notes/';
const FULL_PATH = BACKEND_URL + PATH_ID;

type GetNote = {
    content: string,
    title: string,
    author: string,
};

export const ModalPage = () => {
    const [noteState, SetNote] = useState<Status.Open | Status.Get | Status.Delete>(Status.Get);
    const [fetchState, SetFetch] = useState<GetNote | Status.Error | null>();

    useEffect(() => {
        (async function () {
            await fetchNotes(FULL_PATH).then((note) => {
                switch (note) {
                    case null:
                        SetFetch(Status.Error);
                        break;
                    default:
                        note.name ? SetFetch(Status.Error) : SetFetch(note);
                }
            });
        })();
    }, []);

    const ReadNote = () => {
        fetchNotes(BACKEND_URL, fetchMethods.put, {
            '_id': `${PATH_ID}`,
            'isRead': true,
        });
    };

    const DeleteNote = () => {
        fetchNotes(FULL_PATH, fetchMethods.delete);
    };

    const getNote = noteState === Status.Get;
    const openNote = noteState === Status.Open;
    const deleteNote = noteState === Status.Delete;

    return <ModalTemplate >
        {!fetchState && <Preloader />}
        {(fetchState === (Status.Error || null)) ? <Error404>
            Страница не найдена
        </Error404> : (
            <ModalWrapper active={!!fetchState}>
                <div className={styles.navigationСontainer}>
                    <ModalTitle noteState={noteState} />
                    {openNote && (
                        <button className={styles.navigationOpen}>
                            <svg className={styles.navigationImg} viewBox='0 0 1024 1024' onClick={() => { SetNote(Status.Delete); DeleteNote(); }}>
                                <path d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' />
                            </svg>
                        </button>
                    )}
                </div>

                {getNote && (
                    <ModalButton callback={() => { SetNote(Status.Open); ReadNote(); }}>Открыть</ModalButton>
                )}

                {openNote && (
                    <Message>
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
