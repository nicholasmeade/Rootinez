import { useState } from "react";
import apiUrl from "../apiUrl";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { useParams } from "react-router";

const Login = (props) => {
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

    // login the user once form is completed with username and password
    const loginUser = () => {
        // passing in state of username and password to match the backend model
        fetch(`${apiUrl}auth/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        // data.token is method to grab authentication token
        // props used to utilize loginToken function and update state of token
        .then(data => props.loginToken(data.token))
        .catch(error => console.log(error))
        }

        return ( 
            <div>
                <h1>Here is the login page.</h1>
                <label>
                    Username: <input type="text" name="username" value={username} onChange={updateUsername} />
                </label>
                <br />
                <label>
                    Password: <input type="password" name="password" value={password} onChange={updatePassword} />
                </label>
                <br />
                <button onClick={loginUser}><Link className='myaccount-tab' to='/userhome'>Login</Link></button>
                <p>Don't have an account? Create one <Link className='register-tab' to='/register'>here</Link>.</p>
            </div>
         );
}
 
export default Login;