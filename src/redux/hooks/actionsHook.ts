import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch, AppThunkDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useThunkDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
