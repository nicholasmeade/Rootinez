import { Link } from "react-router-dom";

const HowTo = () => {
    return ( 
        <div>
            <header className='header-howto'>
                <button><Link className='home-tab' to='/'>Home</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
                <button><Link className='logout-tab' to='/logout'>Log Out</Link></button>
            </header>
            <h1>Here's the Tutorial page.</h1>
            <h2>Future updates to Rootinez will include a user tutorial and resources for inspiration with making and enhancing routines.</h2>
        </div>
     );
}

export default HowTo;