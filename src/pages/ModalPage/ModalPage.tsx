import { ModalButton } from '@/widgets/ModalButton/ModalButton';
import { ModalTitle } from '@/widgets/ModalTitle/ModalTitle';
import { ModalTemplate } from '@/widgets/ModalTemplate/ModalTemplate';
import { Message } from '@/widgets/Message/Message';
import { ModalLink } from '@/widgets/ModalLink/ModalLink';
import { useEffect, useState } from 'react';
import { Status } from '@/shared/lib/EnumStatus';
import { fetchNotes } from '@/shared/api/fetchNotes';
import styles from './ModalPage.module.scss';
import { ModalWrapper } from '@/widgets/ModalWrapper/ModalWrapper';
import Preloader from '@/shared/Preloader/Preloader';
import { Error404 } from '@/widgets/ModuleError/Error404';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api/notes/' + location.pathname.substring(13);

type GetNote = {
    content: string,
    title: string,
    author: string,
};

export const ModalPage = () => {
    const [noteState, SetNote] = useState<Status.Open | Status.Get | Status.Delete>(Status.Get);
    const [fetchState, SetFetch] = useState<GetNote | Status.Error>();

    useEffect(() => {
        (async function () {
            await fetchNotes(BACKEND_URL).then((note) => {
                note.name ? SetFetch(Status.Error) :
                    SetFetch(note);
            });
        })();
    }, []);

    const getNote = noteState === Status.Get;
    const openNote = noteState === Status.Open;
    const deleteNote = noteState === Status.Delete;

    return <ModalTemplate >
        {!fetchState && <Preloader />}
        {(fetchState === Status.Error) ? <Error404>
            Страница не найдена
        </Error404> : (
            <ModalWrapper active={!!fetchState}>
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
                    <Message>
                        {fetchState?.content}
                    </Message>
                )}
            </ModalWrapper>)
        }

        {(openNote || deleteNote) && (
            <ModalLink path='/develop/' >Написать заметку</ModalLink>
        )}

    </ModalTemplate>;
};
