// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import openMenuReducer from './openMenu/openMenuSlice';

export const store = configureStore({
    reducer: {
        menu: openMenuReducer
    }
});

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
