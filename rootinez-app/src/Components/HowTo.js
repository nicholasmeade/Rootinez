import { Link } from "react-router-dom";

const HowTo = () => {
    return ( 
        <div>
            <header className='header'>
                <button><Link className='home-tab' to='/'>Home</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
                <button>Log Out</button>
            </header>
            <h1>Here's the How To page.</h1>
        </div>
     );
}
 
export default HowTo;