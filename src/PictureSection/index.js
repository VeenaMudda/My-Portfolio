import './index.css';
import makeup_artist from '../pictures/makeup_artist_applying_makeup.jpeg';
import self_makeup from '../pictures/self_makeup.jpg';
import look from '../pictures/look.jpg';

const PictureSection = () => {
    return(
        <div className='pictures-container'>
            <img src={makeup_artist} alt="makeup artist" className='picture'/>
            <img src={self_makeup} alt="self makeup" className='picture'/>
            <img src={look} alt='makeup look' className='picture'/>
        </div>
    )
}

export default PictureSection;