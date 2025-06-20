import '../App.css';
import './index.css';
import NavBar from '../NavBar';
import JoinBar from '../JoinBar';
import PictureSection from '../PictureSection';
import Body from '../Body';

const HomePage = () => {
    return(
        <div className='home-container'>
            <NavBar/>
            <div className='body-section'>
                <PictureSection/>
                <Body/>
            </div>
           
        </div>
    )
}

export default HomePage;