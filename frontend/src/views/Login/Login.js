import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = props => {
    return (
        <div className="login-container">
            <div>
                <h1> Logga in </h1>
                <p> Logga in med användarnamn och lösenord. </p>
            </div>
            <div className="form-email">
                <input type="email" nema="email" placeholder="Skriv in ditt användarnamn" />
            </div>

            <div className="form-pws">
                <input type="password" nema="password" placeholder="Skriv in lösenord" />
            </div>
            <div>
                <label className="form-checkbox">
                    <input type="checkbox" />
                    Kom ihåg
                </label>
                <label className="forgot-password">
                    <Link to="/ForgotPassword">Glömt lösenord?</Link>
                </label>
            </div>
            <div>
                <button className="form-btn"> Logga in </button>
            </div>
        </div>

    );
};

export default Login;