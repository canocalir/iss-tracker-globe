import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { IssApi } from '../services/issApi';

export const store = configureStore({
  reducer: {
    [IssApi.reducerPath]: IssApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(IssApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
