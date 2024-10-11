import './index.css';
import icon from '../pictures/portfolio_logo.jpg';
import { Link } from 'react-router-dom';

const NavbarBeautyClub = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <div className="navbar-beautyclub-container">
            <Link to={"#"} onClick={scrollToTop}><img src={icon} alt='portfolio logo' className="portfolio-logo"/></Link>
            <div className='links-container'>
                <Link to={'/'} className='navbar-link'>Home</Link>
                <a>Community</a>
                <a>Member Login</a>
            </div>
        </div>
    )
}

export default NavbarBeautyClub;