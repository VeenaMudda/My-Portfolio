import './index.css';
import logo from '../pictures/portfolio_logo.jpg';

const AboutUs = () => {
    return(
        <div>
            <div className='about-us-navbar-container'>
                <div>
                    <img src={logo} alt='logo' className='portfolio-logo'/>
                </div>
                <div className='links-container'>a</div>
            </div>
        </div>
    )
}

export default AboutUs;