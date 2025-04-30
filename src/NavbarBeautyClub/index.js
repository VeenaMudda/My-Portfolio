import './index.css';
import icon from '../pictures/portfolio_logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal';
import Login from '../Login';

const NavbarBeautyClub = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [showLogin,setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    return(
        <div className="navbar-beautyclub-container">
            <Link to={"#"} onClick={scrollToTop}><img src={icon} alt='portfolio logo' className="portfolio-logo"/></Link>
            <div className='baurty-links-container'>
                <Link to={'/'} className='navbar-link'>Home</Link>
                <Link to={'/community'} className='navbar-link'>Community</Link>
                <button className='navbar-login' onClick={handleLogin}>{showLogin ? 'Close Login' : 'Member Login'}</button>
            </div>
            {showLogin && <Modal className='modal-overlay' onClose={handleLogin}><Login/></Modal>}
        </div>
    )
}

export default NavbarBeautyClub;