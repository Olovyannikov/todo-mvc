import {configureStore} from '@reduxjs/toolkit';
import { models } from './models';

export const store =  configureStore({
    reducer: {
        ...models
    },
});

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>