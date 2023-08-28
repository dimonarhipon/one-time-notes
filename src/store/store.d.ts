import store from './store';

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
