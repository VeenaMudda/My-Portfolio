import './index.css';
import logo from '../pictures/portfolio_logo.jpg';
import JoinBar from '../JoinBar';
import aboutUs1 from '../pictures/about_us_1.jpg';
import aboutUs2 from '../pictures/about_us_2.jpg';
import aboutUs3 from '../pictures/about_us_3.jpg';
import {Link} from 'react-router-dom';
import Login from '../Login';
import { useState } from 'react';

const AboutUs = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    return(
        <div>
            <div className='bar-container'>
                <div className='about-us-navbar-container'>
                    <div>
                        <img src={logo} alt='logo' className='portfolio-logo'/>
                    </div>
                    <div className='links-container'>
                        <Link to={'/beauty'} className='navbar-link'>Beauty Club</Link>
                        <Link to={'/community'} className='navbar-link'>Community</Link>
                        <Link to={'#'} className='navbar-link'>About Us</Link>
                        <button className='navbar-login' onClick={handleLogin}>{showLogin ? 'close Login' : 'Member Login'}</button>
                    </div>
                </div>
                <JoinBar/>
            </div>
            <div className='about-us-container'>
                <h1>Building a MUA portfolio platform</h1>
                <h2 className='description'>This platform is on a mission to help make-up artists generate a livelihood through outcome-led skilling. This platform works towards enabling mass opportunities for the next generation of workforce.</h2>
                <div className='pictures-container'>
                    <img src={aboutUs1} alt='about us 1' className='about-us-picture'/>
                    <img src={aboutUs2} alt='about us 2' className='about-us-picture'/>
                    <img src={aboutUs3} alt='about us 3' className='about-us-picture'/>
                </div>
            </div>
            {showLogin && 
            <div className='modal-overlay'><Login/></div>}
        </div>
    )
}

export default AboutUs;