import { Link } from "react-router-dom";

const Logout = () => {
    return ( 
        <div className='logout-container'>
            <header className='header-login'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='about-tab' to='/about'>About</Link></button>
            </header>
            <h2>This is where the user logs out.</h2>
        </div>
     );
}
 
export default Logout;