import { useState } from "react";
import apiUrl from "../apiUrl";
import {Routes, Route, Link, Navigate} from 'react-router-dom'

const Login = (props) => {
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

    // login the user once form is completed with username and password
    const loginUser = () => {
        // passing in state of username and password to match the backend model
        fetch(`${apiUrl}auth/`, {
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
        

    console.log('hit login page')

        return ( 
            <div>
                <header className='header-login'>
                    <button><Link className='home-tab' to='/'>Home</Link></button>
                    <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                </header>
                <h1>Here is the login page.</h1>
                <label>
                    Username: <input type="text" name="username" value={username} onChange={updateUsername} />
                </label>
                <br />
                <label>
                    Password: <input type="password" name="password" value={password} onChange={updatePassword} />
                </label>
                <br />
                <button onClick={loginUser}><Link className='myaccount-tab' to='/userhome' username={username}>Login</Link></button>
                <p>Don't have an account? Create one <Link className='register-tab' to='/register'>here</Link>.</p>
            </div>
         );
}
 
export default Login;