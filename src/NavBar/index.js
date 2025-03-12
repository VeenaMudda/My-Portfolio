import React, { useState } from 'react';
import './index.css';
import portfolio_logo from '../pictures/portfolio_logo.jpg';
import BeautyClub from '../BeautyClub';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import Login from '../Login';

const NavBar = () =>{
    const handleClick = (e) => {
        e.preventDefault();
    }

    const openBeauty = (e) => {
        return(<BeautyClub/>)
    }

    const [showLogin,setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    return(
        <>
            <div className="navbar-container">
                <Link to={"/"}><img src={portfolio_logo} alt='portfolio logo' className='portfolio-logo'/></Link>
                <div className='links-container'>
                    <Link to={"/beauty"} className='navbar-link'><p>Beauty Club</p></Link>
                    <Link to={'/community'} className='navbar-link'>Community</Link>
                    <Link to={'/about-us'} className='navbar-link'>About Us</Link>
                    <button className='navbar-login' onClick={handleLogin}>{showLogin ? 'Close Login' : 'Member Login'}</button>
                </div>
            </div>
            {showLogin && <Modal className='modal-overlay' onClose={handleLogin}><Login/></Modal>}
        </>
    )
}

export default NavBar;