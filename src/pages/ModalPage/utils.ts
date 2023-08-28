import myFetch from '@/shared/api/myFetch';

export const PATH_ID = location.pathname.substring(20);
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + 'api/notes/';
export const FULL_PATH = BACKEND_URL + PATH_ID;

export const ReadNote = () => {
    myFetch.put(BACKEND_URL, {
        '_id': `${PATH_ID}`,
        'isRead': true,
    });
};

export const DeleteNote = () => {
    myFetch.delete(FULL_PATH);
};
