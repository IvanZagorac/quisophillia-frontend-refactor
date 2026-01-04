// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import openMenuReducer from './openMenu/openMenuSlice';
import categoriesReducer from './categories/categoriesSlice';

import userReducer from './user/userSlice';

export const store = configureStore({
    reducer: {
        menu: openMenuReducer,
        categories: categoriesReducer,
        user: userReducer,
    }
});

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
