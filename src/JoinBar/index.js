import { useState } from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '../Modal';

const JoinBar = () => {
    const [showLogin,setShowLogin] = useState(false);

    const [formData,setFormData] = useState({name:'',phone:'',city:''});

    const [message,setMessage] = useState('');

    const handleLogin = () => {
        setShowLogin(!showLogin);
        if(showLogin === true){
            setFormData({name:'',phone:'',city:''});
        }
    }

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');

    const handleChangeName = (e) => {
        const name = e.target.value;
        setFormData((prev) => ({...prev,name}));
        //console.log(formData.name);
    }

    const handleChangePhone = (e) => {
        const phone = e.target.value;
        setFormData((prev) => ({...prev,phone}));
    }

    const handleChangeCity = (e) => {
        const city = e.target.value;
        setFormData((prev) => ({...prev,city}));
    }

    const handleSubmit = async() => {
        console.log("click");

        try{
            const response = await fetch("http://localhost:3001/api/register",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            });
            console.log(formData);
            const data = await response.json();
            
            if(response.ok){
                setFormData({name:'',phone:'',city:''});
                console.log(data.message);
                setMessage(data.message);
            }
            else{
                console.log(data.error);
                setMessage(data.error);
            }
        }
        
        catch(error){
            console.log(error);
        }
    }

    return(
        <div className='join-container'>
            <p>New to the club?</p>
            <p className='join' onClick={handleLogin}>{showLogin ? 'Exit' : 'Join Now'}</p>&nbsp;<ArrowForwardIcon/>
            {showLogin && <Modal className='modal-overlay' onClose={handleLogin}>
                <div className='join-modal'>
                    <h1>Registration Form</h1><br/>
                    <p>Enter your name</p>
                    <input type='text' className='your-name' placeholder='First and last name' value={formData.name} onChange={handleChangeName}/>
                    <p>Enter your WhatsApp Number</p>
                    <input type='number' className='your-name' placeholder='1234567890' value={formData.phone} onChange={handleChangePhone}/>
                    <p>Enter your city</p>
                    <input type="string" className='your-name' placeholder='Hyderabad' value={formData.city} onChange={handleChangeCity}/><br/>
                    <p className='message'>{message}</p>
                    <button type='submit' disabled={formData.name==='' || formData.phone.length!==10 || formData.city===''} className='submit-button' onClick={handleSubmit}>Submit</button>
                </div>
            </Modal>}
        </div>
    )
}

export default JoinBar;