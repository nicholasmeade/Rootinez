import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="aboutsection-container">
            <header className='header-about'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
            </header>
            <div className="about-description">
                <h2>Rootinez was made using...</h2>
                <h3>Frontend Development:</h3>
                <h3>Backend Development:</h3>
                <h3>Inspiration for Rootinez</h3>
                <p>The spark for Rootinez comes from how ingrained routines are in our daily lives. Some of the simplest things we can think of that we do on a day to day basis is a routine comprised of a series of systems, step by step, to fulfill said routine.</p>
                <p>Rootinez is for the individual who aspires for long term success in any domain they seek, with establishing, updating and maintaining positive routines being the foundation of said long term success.</p>
                <p>If this resonates with you, you're in the right place. Jump start your routines by <Link className='register-tab' to='/register'>creating an account</Link>.</p>
            </div>
        </div>
     );
}
 
export default About;