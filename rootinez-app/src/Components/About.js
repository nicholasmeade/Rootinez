import { Link } from "react-router-dom";
import cssIcon from "./../Icons/CSS.png";
import djangoIcon from "./../Icons/Django.png";
import githubIcon from "./../Icons/Github.png";
import htmlIcon from "./../Icons/HTML.png";
import jsIcon from "./../Icons/JS.png";
import linkedinIcon from "./../Icons/LinkedIn.png";
import postgresqlIcon from "./../Icons/PostgreSQL.png";
import pythonIcon from "./../Icons/Python.png";
import reactIcon from "./../Icons/React.png";

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
                <h3>Why use Rootinez?</h3>
                    <p>The spark for Rootinez comes from how ingrained routines are in our daily lives; routines are truly our roots. Some of the simplest things we can think of that we do on a day to day basis is a routine comprised of a series of systems, step by step, to fulfill said routine.</p>
                    <p>Rootinez is for the individual who aspires for long term success in any domain they seek, with establishing, updating and maintaining positive routines being the foundation of said long term success.</p>
                    <p>If this resonates with you, you're in the right place. Jump start your routines by <Link className='register-tab' to='/register'><span className="register-link-text">creating an account</span></Link>.</p>
                <h2>Rootinez was made using...</h2>
                <ul className="language-icons">
                    <li><img src={reactIcon} alt="React Icon" /></li>
                    <li><img src={jsIcon} alt="JS Icon" /></li>
                    <li><img src={htmlIcon} alt="HTML Icon" /></li>
                    <li><img src={cssIcon} alt="CSS Icon" /></li>
                    <li><img src={djangoIcon} alt="Django Icon" /></li>
                    <li><img src={pythonIcon} alt="Python Icon" /></li>
                    <li><img src={postgresqlIcon} alt="PostgreSQL Icon" /></li>
                </ul>
                <footer className="app-footer">
                    <ul>
                        <li><a href="https://github.com/nicholasmeade" target="blank"><img class="github" src={githubIcon} /></a></li>
                        <li><a href="https://www.linkedin.com/in/nicholas-meade-se/" target="blank"><img class="linkedin" src={linkedinIcon} /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
     );
}
 
export default About;