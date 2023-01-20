import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const [userName, setUserName] = useState({
        value: '',
        errorMessage: ''
    });
    const [email, setEmail] = useState({
        value: '',
        errorMessage: ''
    });
    const [password, setPassword] = useState({
        value: '',
        errorMessage: ''
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        errorMessage: ''
    });



    const userNameChange = (userNameInput) => {
        const errorMessage = 'user name only allow lowercase letters (a-z) and numbers(0-9)';

        if (/^[a-z0-9]+$/.test(userNameInput)) {
            setUserName({ value: userNameInput })
        } else {
            setUserName({ value: userNameInput, errorMessage: errorMessage })
        }
    }

    const emailChange = (emailInput) => {
        const errorMessage = 'Please provide a valid Email';

        if (/^\S+@\S+\.\S+$/.test(emailInput)) {
            setEmail({ value: emailInput });
        } else {
            setEmail({ value: emailInput, errorMessage: errorMessage });
        }
    }

    const passwordChange = (passwordInput) => {
        const errorMessage = 'Password must be 6 character';

        if (passwordInput.length < 6) {
            setPassword({ value: passwordInput, errorMessage: errorMessage });
        } else {
            setPassword({ value: passwordInput });
        }
    }

    const confirmPasswordChange = (passwordInput) => {
        const errorMessage = 'asword did not match'
        const prePassword = (password.value);

        if (prePassword === passwordInput) {
            setConfirmPassword({ value: passwordInput });
        } else {
            setConfirmPassword({ value: passwordInput, errorMessage: errorMessage });
        }
    }


    const handlePasswordAuth = (e) => {
        e.preventDefault();

        if (!userName.value) {
            const error = 'User Name required';
            setUserName({ ...userName, errorMessage: error });
        }

        if (!email.value) {
            const errorEmail = "Email is required";
            setEmail({ ...email, errorMessage: errorEmail });
            console.log(email.errorMessage);
        }

        if (!password.value || !confirmPassword.value) {
            const errorPassword = "Password is required";
            setPassword({ ...password, errorMessage: errorPassword })
            console.log(password.errorMessage);
            setConfirmPassword({ ...confirmPassword, errorMessage: errorPassword })
        }
    }

    return (
        <div className="form-field">
            <form onSubmit={handlePasswordAuth}>
                <h1>Register</h1>
                <div className="form-input">
                    <label htmlFor="userName">User Name</label>
                    <input type='text'
                        onChange={(e) => userNameChange(e.target.value)}
                        name="userName"
                        placeholder="user name"
                        value={userName.value}
                    />
                    {userName?.errorMessage && <p>{userName.errorMessage}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type='text'
                        onChange={(e) => emailChange(e.target.value)}
                        name="email"
                        placeholder="Email address"
                        value={email.value}
                    />
                    {email?.errorMessage && <p>{email.errorMessage}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type='text'
                        onChange={(e) => passwordChange(e.target.value)}
                        name="password"
                        placeholder="New Password"
                        value={password.value}
                    />
                    {password?.errorMessage && <p>{password.errorMessage}</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type='text'
                        onChange={(e) => confirmPasswordChange(e.target.value)}
                        name="confirmPassword"
                        placeholder="password"
                        value={confirmPassword.value}
                    />
                    {confirmPassword?.errorMessage && <p>{confirmPassword.errorMessage}</p>}
                </div>
                <h6>Already Have an Account?<Link className="togol-form" to="/login">Login here</Link></h6>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
