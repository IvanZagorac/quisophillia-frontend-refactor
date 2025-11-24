import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openMenu: false
};

const openMenuSlice = createSlice({
    name: 'openMenu',
    initialState,
    reducers: {
        setOpenMenu: (state, action) => 
        {
            state.openMenu = action.payload;
        },
    }
});

export const { setOpenMenu } = openMenuSlice.actions;
export default openMenuSlice.reducer;
