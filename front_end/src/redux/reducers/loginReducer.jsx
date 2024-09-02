import { createSlice } from '@reduxjs/toolkit';

// Création du réducteur pour la connexion
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    },
});

export const { setToken, clearToken } = loginSlice.actions;
export default loginSlice.reducer;
