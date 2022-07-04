import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div>
            <header className='header-about'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
            </header>
            <h1>Here's the About page.</h1>
        </div>
     );
}
 
export default About;