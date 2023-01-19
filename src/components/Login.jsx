import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

    return (
        <div className="form-field">
            <form >
                <h1>Login</h1>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type='text'
                        name="email"
                        placeholder="Email address"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type='text'
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <h6>New to form validity?<Link className="togol-form" to="/">create account</Link></h6>
                <button type="submit">Login</button>
                <h4><Link className="" to="/">Forgotten Password?</Link></h4>
            </form>
        </div>
    )
}

export default Login;
