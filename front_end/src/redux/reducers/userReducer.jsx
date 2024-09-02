import { createSlice } from '@reduxjs/toolkit';

// Création du réducteur pour les informations utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, setError } = userSlice.actions;
export default userSlice.reducer;
