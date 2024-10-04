import './index.css';
import self_makeup_1 from "../pictures/self_makeup_1.jpg";

const BeautyClub = () => {
    return(
        <div className="main-container">
            <h1 className="title">Learn/show makeup from/to other fellow makeup artists!</h1>
            <img src={self_makeup_1} alt="self makeup" className="image-gradation"/>
        </div>
    )
}

export default BeautyClub;