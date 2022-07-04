import { useState } from "react";
import apiUrl from "../apiUrl";
import { Link } from "react-router-dom";

const Register = (props) => {
    // useState of username field
    const [username, setUsername] = useState('')
    // useState of password field
    const [password, setPassword] = useState('')

    // capturing username input to update state of username
    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    // capturing password input to update state of password
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

     // creeate a new user & login the user once form is completed
     const registerUser = () => {
        // passing in state of username and password to match the backend model
        // post method to API where a new user can be created
        fetch(`${apiUrl}users/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        // props used to utilize setToken to update the state of token
        .then(data => props.setToken(data.token))
        // if there is an error upon API request
        .catch(error => console.log(error))
    }

    // display popup to indicate to user that they've successfully created a new account
    let registerDisplay = ''
    if (props.token !== '') {
        registerDisplay = (
            <div className="registration-success">
                <p>You've succesfully made an account! Go to your account page <Link className='myaccount-tab' to='/userhome'>here</Link>.</p>
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
            <header className='header'>
                <button><Link className='home-tab' to='/'>Home</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
            </header>
                <h1>Here's the Register Page.</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username: <input type="text" name="username" value={username} onChange={updateUsername} />
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