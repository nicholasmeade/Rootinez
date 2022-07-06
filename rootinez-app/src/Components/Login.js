import { useState } from "react";
import apiUrl from "../apiUrl";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import UserHome from "./UserHome";
import axios from "axios"

const Login = (props) => {
    // useState of username field
    const [username, setUsername] = useState('')
    // useState of password field
    const [password, setPassword] = useState('')
    // useState of username's id
    const [userID, setUserID] = useState('')

    // capturing username input to update state of username
    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    // capturing password input to update state of password
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    // test axios request - to log in user and update state
    const loginUser = async () => {
        let payload = {
            username: username,
            password: password
        }
        try {
            let response = await axios.post(`${apiUrl}auth/`, payload)
            console.log(response.data)
            props.setToken(response.data.token)
        } catch(err) {
            console.log(err)
        }
        try {
            let response = await axios.get(`${apiUrl}users/`)
            console.log(response.data)
            if (response.data.username === username) {
                setUserID(response.data.id)
            }
        } catch(err) {
            console.log(err)
        }
    }


    // const var = async () => {
    //     // var here
    //     try {
    //         let response = await axios.post(xxxxx, payload)
    //         console.log
    //     } catch (ex) {
    //         console.log(ex)
    //     }
    // }
    // try {
    //     let response = await axios.get(xxxxx)
    //     console.loglog()
    // }


    // // login the user once form is completed with username and password
    // const loginUser = () => {
    //     // passing in state of username and password to match the backend model
    //     fetch(`${apiUrl}auth/`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({username, password})
    //     })
    //     .then(response => response.json())
    //     // props used to utilize setToken to update the state of token
    //     .then(data => {
    //         props.setToken(data.token)

    //     })
    //     // if there is an error upon API request
    //     .catch(error => console.log(error))
    //     }

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
                    Username: <input type="text" name="username" value={username} onChange={updateUsername} />
                </label>
                <label>
                    Password: <input type="password" name="password" value={password} onChange={updatePassword} />
                </label>
                <br />
                <button onClick={loginUser}><Link className='myaccount-tab' to='/userhome' userID={userID}><span className="login-button-text">Login</span></Link></button>
                <p>Don't have an account? Create one <Link className='register-tab' to='/register'><span className="register-link-text">here</span></Link>.</p>
            </div>
         );
}
 
export default Login;