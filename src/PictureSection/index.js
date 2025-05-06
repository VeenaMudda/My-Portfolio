import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import makeup_artist from '../pictures/makeup_artist_applying_makeup.jpeg';
import self_makeup from '../pictures/self_makeup.jpg';
import look from '../pictures/look.jpg';

const PictureSection = () => {
    return(
        <div className='picture-section-pictures-container'>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false}>
                <img src={makeup_artist} alt="makeup artist" className='picture'/>
                <img src={self_makeup} alt="self makeup" className='picture'/>
                <img src={look} alt='makeup look' className='picture'/>
            </Carousel>
        </div>
    )
}

export default PictureSection;