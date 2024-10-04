import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JoinBar = () => {
    return(
        <div className='join-container'>
            <p>New to the club?</p>
            <p className='join'>Join Now</p>&nbsp;<ArrowForwardIcon/>
        </div>
    )
}

export default JoinBar;