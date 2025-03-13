import { useState } from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '../Modal';

const JoinBar = () => {
    const [showLogin,setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    const [phone,setPhone] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        setPhone(input);
    }

    const handleSubmit = () => {
        console.log("click")
    }

    return(
        <div className='join-container'>
            <p>New to the club?</p>
            <p className='join' onClick={handleLogin}>{showLogin ? 'Exit' : 'Join Now'}</p>&nbsp;<ArrowForwardIcon/>
            {showLogin && <Modal className='modal-overlay' onClose={handleLogin}>
                <div className='join-modal'>
                    <h1>Registration Form</h1><br/>
                    <p>Enter your name</p>
                    <input type='text' className='your-name' placeholder='First and last name'/>
                    <p>Enter your WhatsApp Number</p>
                    <input type='number' className='your-name' placeholder='1234567890' value={phone} onChange={handleChange}/>
                    <p>Enter your city</p>
                    <input type="string" className='your-name' placeholder='Hyderabad'/><br/>
                    <button type='submit' disabled={phone.length!==10} className='submit-button' onClick={handleSubmit}>Submit</button>
                </div>
            </Modal>}
        </div>
    )
}

export default JoinBar;