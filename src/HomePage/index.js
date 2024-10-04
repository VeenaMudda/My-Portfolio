import '../App.css';
import NavBar from '../NavBar';
import JoinBar from '../JoinBar';
import PictureSection from '../PictureSection';
import Body from '../Body';

const HomePage = () => {
    return(
        <div>
            <NavBar/>
            <JoinBar/>
            <PictureSection/>
            <Body/>
        </div>
    )
}

export default HomePage;