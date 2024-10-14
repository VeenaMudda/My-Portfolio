import './index.css';
import self_makeup_1 from "../pictures/self_makeup_1.jpg";
import NavbarBeautyClub from '../NavbarBeautyClub';
import brushes from '../pictures/brushes.jpg';

const BeautyClub = () => {
    return(
        <div className="page-container">
            <div className="main-container">
                <h1 className="title">Learn/show makeup from/to other fellow makeup artists!</h1>
                <img src={self_makeup_1} alt="self makeup" className="image-gradation"/>
            </div>
            <NavbarBeautyClub/>
            <div className='bodys-container'>
                <div className='content-container'>
                    <h2>Welcome to MUA Hub!</h2>
                    <h1>Become a Professional </h1><br/><h1 className='makeup-artist'>Makeup Artist</h1>
                    <button className='apply-now'>Apply now</button>
                    <div className='login-container'>
                        <h3>Already a member?</h3> &nbsp;
                        <h3 className='login-here'>Login here</h3>
                    </div>
                </div>
                <img src={brushes} className='member-image'/>
            </div>
        </div>
    )
}

export default BeautyClub;