import { useEffect, useState } from "react";
import apiUrl from '../apiUrl'
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserHome = (props) => {
    // state for the user's data
    const [userData, setUserData] = useState({
        description: "",
        id: "",
        name: "",
        owner: ""
    })
    // const [userData, setUserData] = useState({
    //     id: "",
    //     username: "",
    //     routines: []
    // })

    console.log(props.login)
    console.log(userData)

    // state for the user's new routine name
    const [routineName, setRoutineName] = useState('')

    // state for the user's new routine description
    const [routineDescription, setRoutineDescription] = useState('')

    // capturing routine name input to update state of routineName
    const updateRoutineName = (event) => {
        setRoutineName(event.target.value)
    }

    // capturing routine description input to update state of routineDescription
    const updateRoutineDescription = (event) => {
        setRoutineDescription(event.target.value)
    }

    // API call to database to populate the user's routines on page load and/or when the routine list is updated
    useEffect(() => {
        // fetching routine info from API
        fetch(`${apiUrl}routine/${props.login.user.id}`)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => setUserData(response))
    }, []);

    // adding a new routine for the user
    const addRoutine = (event) => {
        event.preventDefault()
        fetch(`${apiUrl}routine/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(`${routineName, routineDescription}`)
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }

    // editing a routine for the user
    const editRoutine = (event) => {
        fetch(`${apiUrl}routine/${userData.routines.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: routineName}, {description: routineDescription}, {id: props.userID})
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }
    
    // deleting a routine for the user
    const deleteRoutine = (event) => {
        fetch(`${apiUrl}routine/${userData.routines.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }

    // logging out a user
    const logoutUser = () => {
        fetch(`${apiUrl}sign-out/`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }

    // dynamic user greeting based on their time zone
    const userGreeting = () => {
        // obtain the current date and hour of the user
        const userDate = new Date();
        const hour = userDate.getHours();
        // logic to toggle between greetings based on the hour
        let greeting
            if (hour < 12) {
                greeting = `Good morning, ${props.login.user.email}! We hope you have a productive day.`
            } else if (hour >= 12 && hour < 17) {
                greeting = `Good afternoon, ${props.login.user.email}! We hope you've been having a productive day so far.`
            } else if (hour >= 17 && hour < 24) {
                greeting = `Good evening, ${props.login.user.email}! We hope you had a productive day.`
            } else {
                greeting = "invalid time"
            }
        return greeting
    }

    return ( 
        <div className="userhome-container">
            <header className='header-userhome'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='howto-tab' to='/howto'>Tutorial</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
                <button><Link className='logout-tab' to='/logout' onClick={logoutUser}>Log Out</Link></button>
            </header>
            <div className="userdata-container">
                <div className="user-greeting">
                    <h2>{userGreeting()}</h2>
                </div>
                <div className="routine-header">
                    <h3>Here are your routines.</h3>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Routines</TableCell>
                                <TableCell align="left">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userData.id.map((row) => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="left">{row.description}</TableCell>
                                    <TableCell><button className="routine-edit-button" onClick={editRoutine}>Edit</button><button className="routine-delete-button" onClick={deleteRoutine}>Delete</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="adding-routines-container">
                    <h1>Inspired to kickstart a new routine? Add a name for your routine and your description for your routine below.</h1>
                    <form onSubmit={addRoutine}>
                        <input className="adding-routine-name" type="text" value={routineName} onChange={updateRoutineName} />
                        <br/>
                        <textarea className="adding-routine-description" value={routineDescription} onChange={updateRoutineDescription}/>
                        <br/>
                        <input type="submit" value="Add New Routine" />
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserHome;