import React from 'react';
import './index.css';
import portfolio_logo from '../pictures/portfolio_logo.jpg';
import BeautyClub from '../BeautyClub';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    const handleClick = (e) => {
        e.preventDefault();
    }

    const openBeauty = (e) => {
        return(<BeautyClub/>)
    }
    return(
        <>
            <div className="navbar-container">
                <Link to={"/"}><img src={portfolio_logo} alt='portfolio logo' className='portfolio-logo'/></Link>
                <div className='links-container'>
                    <Link to={"/beauty"} className='navbar-link'><p>Beauty Club</p></Link>
                    <p>Community</p>
                    <p>About Us</p>
                    <p>Login</p>
                </div>
            </div>
        </>
    )
}

export default NavBar;