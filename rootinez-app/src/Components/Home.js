import {Routes, Route, Link, Navigate} from 'react-router-dom'

const Home = () => {
    return ( 
        <div className="home-container">
            <header className='header-home'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='about-tab' to='/about'>About</Link></button>
            </header>
            <div className="brand-intro">
                <h1>Welcome to Rootinez.</h1>
                <h2>Routines are our roots. Much of one's success can be mapped back to the routines they establish, improve upon and maintain for a long period of time.</h2>
            </div>
            <div className="register-container">
                <p>Rootinez is currently undergoing frequent work. You can visit the GitHub repository <a href="https://github.com/nicholasmeade/Rootinez" target="blank">here</a>.</p>
                <p>Soon, you will be able to propel yourself with your routines on your own account. Stay tuned.</p>
                <p>For now, you can check out our About section for inspiration for Rootinez and follow as features are rolled out.</p>
                {/* <p>Ready to propel yourself with your routines? Get started with an account <Link className='register-tab' to='/register'><span className="register-link-text">here</span></Link>.</p> */}
            </div>
        </div>
     );
}
 
export default Home;