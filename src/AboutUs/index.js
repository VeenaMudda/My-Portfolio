import './index.css';
import logo from '../pictures/portfolio_logo.jpg';
import JoinBar from '../JoinBar';

const AboutUs = () => {
    return(
        <div>
            <div className='bar-container'>
                <div className='about-us-navbar-container'>
                    <div>
                        <img src={logo} alt='logo' className='portfolio-logo'/>
                    </div>
                    <div className='links-container'>
                        <p>Beauty Club</p>
                        <p>Community</p>
                        <p>About Us</p>
                        <p>Member Login</p>
                    </div>
                </div>
                <JoinBar/>
            </div>
            <div className='about-us-container'>
                <h1>Building a MUA portfolio platform</h1>
                <h2>This platform is on a mission to help make-up artists generate a livelihood through outcome-led skilling. This platform works towards enabling mass opportunities for the next generation of workforce.</h2>
            </div>
        </div>
    )
}

export default AboutUs;