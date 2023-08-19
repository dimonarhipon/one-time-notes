import { fetchMethods } from '@/shared/api/fetchMethods';
import { fetchNotes } from '@/shared/api/fetchNotes';

export const PATH_ID = location.pathname.substring(20);
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api/notes/';
export const FULL_PATH = BACKEND_URL + PATH_ID;

export const ReadNote = () => {
    fetchNotes(BACKEND_URL, fetchMethods.put, {
        '_id': `${PATH_ID}`,
        'isRead': true,
    });
};

export const DeleteNote = () => {
    fetchNotes(FULL_PATH, fetchMethods.delete);
};
