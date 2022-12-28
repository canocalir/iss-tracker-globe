import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { IssApi } from '../services/issApi';
import astroReducer from '../features/astroSlice'
import { PeopleInSpaceApi } from '../services/peopleInSpaceApi';

export const store = configureStore({
  reducer: {
    [IssApi.reducerPath]: IssApi.reducer,
    [PeopleInSpaceApi.reducerPath]: PeopleInSpaceApi.reducer,
    astros: astroReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(IssApi.middleware, PeopleInSpaceApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
