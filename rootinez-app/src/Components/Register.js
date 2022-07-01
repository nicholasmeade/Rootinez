import { useState } from "react";
import apiUrl from "../apiUrl";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Register = (props) => {
    // useState of username field
    const [username, setUsername] = useState('')
    // useState of password field
    const [password, setPassword] = useState('')

    let params = useParams()

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
        // data.token is method to grab authentication token
        // props used to utilize loginToken function and update state of token
        .then(data => props.loginToken(data.token))
        // if there is an error upon API request
        .catch(error => console.log(error))
    }

    // display popup to indicate to user that they've successfully created a new account
    let registerDisplay = ''

    const handleSubmit = (event) => {
        // prevent page refresh
        event.preventDefault()

        if (registerDisplay !== '') {
        registerDisplay = (
            <div className="registration-success">
                <p>You've successfully made your account.</p>
            </div>
        )
        }
    }

    return ( 
        <div className="register-container">
            <div className="register-form">
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
                    <button onClick={registerUser}><Link className='myaccount-tab' to='/userhome'>Register User</Link></button>
                </form>
            </div>
            <div className="registration-message">
                {registerDisplay}
            </div>
        </div>
     );
}

export default Register;