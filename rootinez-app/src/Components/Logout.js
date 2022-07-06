import { Link } from "react-router-dom";

const Logout = () => {
    return ( 
        <div className='logout-container'>
            <header className='header-login'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='about-tab' to='/about'>About</Link></button>
            </header>
            <h2>You have now been logged out. We hope you have a great rest of your day.</h2>
            <h3>If you'd like to log back in, click on the login button above.</h3>
        </div>
     );
}
 
export default Logout;