import '../styles/Pages/Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, setUserData } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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

        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Incorrect email or password');
                } else {
                    throw new Error('Incorrect email or password');
                }
            }
            return response.json();
        })
        .then(data => {
            if (data && data.body && data.body.token) {
                const token = data.body.token;

                dispatch(loginSuccess({ token }));

                fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP error while retrieving profile');
                    }
                    return response.json();
                })
                .then(userData => {
                    dispatch(setUserData( userData.body ));
                    navigate('/user');
                })
                .catch(error => {
                    console.error('Error retrieving user data:', error.message);
                });
            } else {
                console.error('Login failed: Token not received.', data);
            }
        })
        .catch(error => {
            setError(error.message);
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
                        {error && <p className="error-message">{error}</p>}
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
