import { fetchMethods } from '@/shared/api/fetchMethods';
import { fetchNotes } from '@/shared/api/fetchNotes';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api/notes/';

export const ReadNote = (id: string, path: string) => {
    fetchNotes(path, fetchMethods.put, {
        '_id': `${id}`,
        'isRead': true,
    });
};

export const DeleteNote = (path: string) => {
    fetchNotes(path, fetchMethods.delete);
};

export enum ErrorsResponse {
    Error404 = 'Произошла ошибка 404',
    Error500 = 'Ошибка сервера (500)',
}