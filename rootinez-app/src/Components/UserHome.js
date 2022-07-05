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
        id: "",
        username: "",
        routines: []
    })

    // API call to database to populate the user's routines on page load and/or when the routine list is updated
    useEffect(() => {
        // fetching routine info from API
        fetch(`${apiUrl}user/7`)
            .then(response => response.json())
            .then(data => setUserData(data))
    }, []);

    // dynamic user greeting based on their time zone
    const userGreeting = () => {
        // obtain the current date and hour of the user
        const userDate = new Date();
        const hour = userDate.getHours();
        // logic to toggle between greetings based on the hour
        let greeting
            if (hour < 12) {
                greeting = `Good morning, ${userData.username}!`
            } else if (hour >= 12 && hour < 17) {
                greeting = `Good afternoon, ${userData.username}!`
            } else if (hour >= 17 && hour < 24) {
                greeting = `Good evening, ${userData.username}!`
            } else {
                greeting = "invalid time"
            }
        return greeting
    }

    // test to create table with user's routine data
    function createData (
        name: string,
        description: string,
    ) {
        return { name, description}
    }

    const rows = [
        createData('Routine Name', 159, 6.0, 24, 4.0),
        createData('Routine Description', 237, 9.0, 37, 4.3)
    ]

    return ( 
        <div className="userhome-container">
            <header className='header-userhome'>
                <button><Link className='home-tab' to='/'>Home</Link></button>
                <button><Link className='howto-tab' to='/howto'>Tutorial</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
                <button>Log Out</button>
            </header>
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
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default UserHome;