import {Routes, Route, Link, Navigate} from 'react-router-dom'

const Home = () => {

    console.log('homerun')

    return ( 
        <div className="home-container">
            <header className='header-home'>
                <button><Link className='home-tab' to='/'>Rootinez</Link></button>
                <button><Link className='register-tab' to='/register'>Register Here</Link></button>
                <button><Link className='login-tab' to='/login'>Login</Link></button>
                <button><Link className='myaccount-tab' to='/userhome'>My Account</Link></button>
            </header>
            <div className="brand-intro">
                <h1>Welcome to Rootinez.</h1>
                <h3>Routines are our roots. Much of one's success can be mapped back to the routines they establish, improve upon and maintain for a long period of time.</h3>
            </div>
            <div className="register-container">
                <p>Ready to propel yourself with your routines? Get started with an account <Link className='register-tab' to='/register'>here</Link>.</p>
            </div>
        </div>
     );
}
 
export default Home;