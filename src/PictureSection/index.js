import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import makeup_artist from '../pictures/makeup_artist_applying_makeup.jpeg';
import self_makeup from '../pictures/self_makeup.jpg';
import look from '../pictures/look.jpg';
import { useMediaQuery } from '@mui/material';

const PictureSection = () => {
    const isSmallScreen = useMediaQuery('(max-width: 374px)');
    return(
        <div className='picture-section-pictures-container'>
            {isSmallScreen ? 
                <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} className='carousel'>
                    <img src={makeup_artist} alt="makeup artist" className='picture'/>
                    <img src={self_makeup} alt="self makeup" className='picture'/>
                    <img src={look} alt='makeup look' className='picture'/>
                </Carousel> : 
                <div className='pictures-section-pictures-container'>
                    <img src={makeup_artist} alt='makeup artist' className='picture'/>
                    <img src={self_makeup} alt='self makeup' className='picture'/>
                    <img src={look} alt='makeup look' className='picture'/>
                </div>}
        </div>
    )
}

export default PictureSection;