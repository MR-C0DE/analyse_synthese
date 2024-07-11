import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSend = (event) => {
        event.preventDefault();

        // Simple validation
        if (username === "" || password === "") {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        setError(""); // Clear any previous errors

        const data = {
            username,
            password
        };

        alert(JSON.stringify(data));
    };

    return (
        <div className='Login'>
            <div className='form-login'>
                <h2>Connexion de l'utilisateur</h2>
                {error && <p className="error-message">{error}</p>}
                <div>
                    <input
                        onChange={handleUsername}
                        placeholder="Email"
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                    />
                    <input
                        onChange={handlePassword}
                        placeholder="Mot de passe"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                    />
                    <button onClick={handleSend}>Se connecter</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
