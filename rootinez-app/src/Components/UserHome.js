import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from '../apiUrl'
import { Link } from "react-router-dom";

const UserHome = (props) => {
    // state for loading routines upon page load and/or when the routine list is updated
    const [populateRoutines, setPopulateRoutines] = useState({})

    // API call to database to populate the user's routines on page load and/or when the routine list is updated
    useEffect(() => {
        // fetching routine info from API
        fetch(`${apiUrl}routines/`)
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    // dynamic user greeting based on their time zone
    const userGreeting = () => {
        // obtain the current date and hour of the user
        const userDate = new Date();
        const hour = userDate.getHours();
        // logic to toggle between greetings based on the hour
        let greeting
            if (hour < 12) {
                greeting = "Good morning!"
            } else if (hour >= 12 && hour < 17) {
                greeting = "Good afternoon!"
            } else if (hour >= 17 && hour < 24) {
                greeting = "Good evening!"
            } else {
                greeting = "invalid time"
            }
        return greeting
    }

    console.log(props.token)
    console.log(props.username)

    return ( 
        <div className="userhome-container">
            <header className='header'>
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
        </div>
     );
}
 
export default UserHome;