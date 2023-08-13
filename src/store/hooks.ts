import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TState, TDispatch } from './store';

type DispatchFunc = () => TDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
