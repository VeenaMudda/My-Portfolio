import { Link } from 'react-router-dom';
import './index.css';
import portfolio_logo from "../pictures/portfolio_logo.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import carousel1 from '../pictures/carousel_1.jpg';
import carousel2 from '../pictures/carousel_2.jpg';
import carousel3 from '../pictures/carousel_3.jpg';
import carousel4 from '../pictures/carousel_4.jpg';
import carousel5 from '../pictures/carousel_5.jpg';

const Community = () => {
    return(
        <>
            <div className='navbar-container'>
                <Link to={'/'}><img src={portfolio_logo} alt='portfolio logo' className='portfolio-logo'/></Link>
                <div className='links-container'>
                    <p>Beauty Club</p>
                    <p>About Us</p>
                </div>
            </div>
            <div className='community-page-container'>
                <h2 className='welcome-to'>WELCOME TO</h2>
                <h1>MUA Community</h1>
                <h3 className='description'>This community is a hub for makeup enthusiasts. Here, you'll find a world rich in learning, connection and growth. Join this community to find a unique space to refine your skills, share your experiences, and collaborate with like-minded individuals.</h3>
                <Carousel className='carousel-container'>
                    <div>
                        <img src={carousel1} alt='carousel 1' className='carousel-image'/>
                    </div>
                    <div>
                        <img src={carousel2} alt='carousel 2' className='carousel-image'/>
                    </div>
                    <div>
                        <img src={carousel3} alt='carousel 3' className='carousel-image'/>
                    </div>
                    <div>
                        <img src={carousel4} alt='carousel 4' className='carousel-image'/>
                    </div>
                    <div>
                        <img src={carousel5} alt='carousel 5' className='carousel-image'/>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Community;