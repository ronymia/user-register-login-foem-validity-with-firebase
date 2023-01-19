import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    return (
        <div className="form-field">
            <form>
                <h1>Register</h1>
                <div className="form-input">
                    <label htmlFor="userName">User Name</label>
                    <input type='text'
                        name="userName"
                        placeholder="user name"
                    />
                </div>
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
                        placeholder="New Password"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type='text'
                        name="confirmPassword"
                        placeholder="password"
                    />
                </div>
                <h6>Already Have an Account?<Link className="togol-form" to="/login">Login here</Link></h6>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
