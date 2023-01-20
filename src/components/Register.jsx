import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const [userName, setUserName] = useState({
        userName: '',
        errorMessage: ''
    });
    const [email, setEmail] = useState({
        email: '',
        errorMessage: ''
    });
    const [password, setPassword] = useState({
        password: '',
        errorMessage: ''
    });
    const [confirmPassword, setConfirmPassword] = useState({
        confirmPassword: '',
        errorMessage: ''
    });

    const userNameChange = (e) => {
        console.log(e.target.value)
        setUserName({ ...userName, userName: e.target.value })
    }
    const emailChange = (e) => {
        console.log(e.target.value)
        setEmail({ ...email, email: e.target.value })
    }
    const passwordChange = (e) => {
        console.log(e.target.value)
        setPassword({ ...password, password: e.target.value })
    }
    const confirmPasswordChange = (e) => {
        console.log(e.target.value)
        setConfirmPassword({ ...confirmPassword, confirmPassword: e.target.value })
    }

    return (
        <div className="form-field">
            <form>
                <h1>Register</h1>
                <div className="form-input">
                    <label htmlFor="userName">User Name</label>
                    <input type='text'
                        onChange={userNameChange}
                        name="userName"
                        placeholder="user name"
                        value={userName.userName}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type='text'
                        onChange={emailChange}
                        name="email"
                        placeholder="Email address"
                        value={email.email}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type='text'
                        onChange={passwordChange}
                        name="password"
                        placeholder="New Password"
                        value={password.password}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type='text'
                        onChange={confirmPasswordChange}
                        name="confirmPassword"
                        placeholder="password"
                        value={confirmPassword.confirmPassword}
                    />
                </div>
                <h6>Already Have an Account?<Link className="togol-form" to="/login">Login here</Link></h6>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
