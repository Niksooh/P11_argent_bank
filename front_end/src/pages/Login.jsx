import '../styles/Pages/Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, setUserData } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const auth = (e) => {
        e.preventDefault();
        console.log("Tentative de connexion...");

        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Données JSON reçues :', data);

            // Ici on accède au token via data.body.token
            if (data && data.body && data.body.token) {
                const token = data.body.token;

                // Dispatch du token pour la gestion de l'authentification
                dispatch(loginSuccess({ token }));
                console.log('Login réussi, token :', token);

                // Deuxième fetch pour récupérer les données utilisateur avec le token
                fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',  // Dans ta doc, c'est un POST pour récupérer le profil
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,  // On passe le token dans les headers
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur HTTP lors de la récupération du profil : ${response.status}`);
                    }
                    return response.json();
                })
                .then(userData => {
                    console.log('Données utilisateur :', userData);

                    // Dispatch des données utilisateur dans Redux
                    dispatch(setUserData({ userData }));

                    // Redirection vers la page utilisateur
                    navigate('/user');
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données utilisateur :', error.message);
                });
            } else {
                console.error('Login échoué : Token non reçu.', data);
            }
        })
        .catch(error => {
            console.error('Erreur lors de la connexion :', error.message);
        });
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={emailChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={passwordChange}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="sign-in-button"
                        onClick={auth}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}
