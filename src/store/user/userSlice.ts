import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDecodedRefreshToken, removeToken } from '../../api/authUtils';

interface User {
    userId: number;
    email: string;
    username: string; // Assuming username is in the token
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
}

const getInitialState = (): UserState => 
{
    const user = getDecodedRefreshToken('refresh');
    if (user && user.userId && user.email && user.exp && user.exp * 1000 > Date.now()) 
    {
        return {
            isAuthenticated: true,
            user: {
                userId: user.userId,
                email: user.email,
                username: user.username || '', // Handle if username is not present
            },
        };
    }
    return { isAuthenticated: false, user: null };
};

const userSlice = createSlice({
    name: 'user',
    initialState: getInitialState(),
    reducers: {
        loginUser: (state, action: PayloadAction<User>) => 
        {
            console.log(state);
            console.log(action);
            state.user = action.payload;
            state.isAuthenticated = true;
            // The token is already saved in LoginScreen, here we just manage the state
        },
        logoutUser: (state) => 
        {
            state.user = null;
            state.isAuthenticated = false;
            // Tokens are removed separately, this just clears the state
            removeToken('token');
            removeToken('refresh');
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
