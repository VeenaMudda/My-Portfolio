import { useState } from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '../Modal';

const JoinBar = () => {
    const [showLogin,setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');

    const handleChangeName = (e) => {
        const nameInput = e.target.value;
        setName(nameInput);
    }

    const handleChangePhone = (e) => {
        const input = e.target.value;
        setPhone(input);
    }

    const handleChangeCity = (e) => {
        const inputCity = e.target.value;
        setCity(inputCity);
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
                    <input type='text' className='your-name' placeholder='First and last name' value={name} onChange={handleChangeName}/>
                    <p>Enter your WhatsApp Number</p>
                    <input type='number' className='your-name' placeholder='1234567890' value={phone} onChange={handleChangePhone}/>
                    <p>Enter your city</p>
                    <input type="string" className='your-name' placeholder='Hyderabad' value={city} onChange={handleChangeCity}/><br/>
                    <button type='submit' disabled={name==='' || phone.length!==10 || city===''} className='submit-button' onClick={handleSubmit}>Submit</button>
                </div>
            </Modal>}
        </div>
    )
}

export default JoinBar;