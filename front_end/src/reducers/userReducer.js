import { createSlice } from '@reduxjs/toolkit';

// Création du réducteur pour les informations utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        token: '',
        isAuth: 'false',
    },
    reducers: {

    },
});

export default userSlice.reducer;
