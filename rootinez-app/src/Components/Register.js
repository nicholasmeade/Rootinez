import { useState } from "react";
import apiUrl from "../apiUrl";
import { Link } from "react-router-dom";

const Register = (props) => {
    // useState of username field
    const [email, setEmail] = useState('')
    // useState of password field
    const [password, setPassword] = useState('')

    // capturing username input to update state of username
    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    // capturing password input to update state of password
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

     // creeate a new user & login the user once form is completed
     const registerUser = () => {
        fetch(`${apiUrl}sign-up/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email": email, "password": password})
        })
        console.log(email, password)
    }

        //     // passing in state of username and password to match the backend model
    //     fetch(`${apiUrl}auth/`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({username, password})

    // display popup to indicate to user that they've successfully created a new account
    let registerDisplay = ''
    if (props.token !== '') {
        registerDisplay = (
            <div className="registration-success">
                <p>You've succesfully made an account! Log into your account <Link className='login-tab' to='/login'><span className="register-link-text">here</span></Link>.</p>
            </div>
        )
    }

    const handleSubmit = (event) => {
        // prevent page refresh
        event.preventDefault()
    }

    return ( 
        <div className="register-container">
            <div className="register-form">
            <header className='header-register'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
            </header>
                <h1>We're happy to have you join Rootinez. Soon you will be able to make your own account to use on Rootinez.</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email: <input type="text" name="username" value={email} onChange={updateEmail} />
                    </label>
                    <br />
                    <label>
                        Password: <input type="password" name="password" value={password} onChange={updatePassword} />
                    </label>
                    <br />
                    <button onClick={registerUser}>Register User</button>
                </form>
            </div>
            <div className="registration-message">
                {registerDisplay}
            </div>
        </div>
     );
}

export default Register;