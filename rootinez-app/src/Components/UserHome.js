import { useEffect, useState } from "react";

const UserHome = () => {
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

    // api call to database to populate the user's routines on page load

    return ( 
        <div className="userhome-container">
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