import { useState } from "react";
import apiUrl from "../apiUrl";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import UserHome from "./UserHome";
import axios from "axios"

const Login = (props) => {
    // useState of username field
    const [email, setEmail] = useState('')
    // useState of password field
    const [password, setPassword] = useState('')
    // useState of user's credentials
    const [loginAccount, setLoginAccount] = useState({
        user: {
            email: '',
            id: '',
            token: ''
        }
    })

    // capturing username input to update state of username
    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    // capturing password input to update state of password
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    // logging in a user
    const loginUser = () => {
        fetch(`${apiUrl}sign-in/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email": email, "password": password})
        })
        .then(response => response.json())
        .then(response => setLoginAccount(response))
    }

    console.log(loginAccount)

        return ( 
            <div>
                <header className='header-login'>
                    <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                    <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                </header>
                <h1>Welcome back to Rootinez. Please log in below.</h1>
                <form>
                </form>
                <label>
                    Email: <input type="text" name="username" value={email} onChange={updateEmail} />
                </label>
                <label>
                    Password: <input type="password" name="password" value={password} onChange={updatePassword} />
                </label>
                <br />
                <button onClick={loginUser}><span className="login-button-text">Login</span></button>
                <p>Don't have an account? Create one <Link className='register-tab' to='/register'><span className="register-link-text">here</span></Link>.</p>
            </div>
         );
}
 
export default Login;