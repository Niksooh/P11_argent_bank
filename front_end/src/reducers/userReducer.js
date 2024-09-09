import { createSlice } from '@reduxjs/toolkit';

// Création du réducteur pour les informations utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
        isAuth: false, // Modifié en booléen
        userName: ''
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuth = true;
            // Assure-toi que l'API renvoie le nom d'utilisateur ou une autre info pertinente
        },
        setUserData: (state, action) => {
            const { userData } = action.payload;
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
        }
    },
});

export const { loginSuccess, setUserData, logout } = userSlice.actions;
export default userSlice.reducer;
