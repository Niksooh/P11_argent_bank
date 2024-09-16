import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
        isAuth: false,
        userName: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuth = true;

        },
        setUserData: (state, action) => {
            const userData  = action.payload; console.log(userData)
            state.firstName = userData.firstName || '';
            state.lastName = userData.lastName || '';
            state.email = userData.email || '';
            state.userName = userData.userName || '';
        },
        logout: (state) => {
            state.token = '';
            state.isAuth = false;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.userName = '';
        },
        updateProfile: (state, action) => {
            state.userName = action.payload.userName
        }
    },
});

export const { loginSuccess, setUserData, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
