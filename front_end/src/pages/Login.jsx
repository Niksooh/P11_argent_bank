import '../styles/Pages/Login.css'
import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            body: JSON.stringify({ email: email, password: password})
        }). then (response => response.json()). then (response => console.log (response))
    }


    return (
        <main class="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={email} onChange={emailChange} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={passwordChange} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button" onClick={ auth }>Sign In</button>
            </form>
        </section>
    </main>
    );
}



