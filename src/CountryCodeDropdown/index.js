import { useState } from 'react';
import './index.css';
import PhoneInput from 'react-phone-input-2';
import uae from '../pictures/united-arab-emirates-flag-icon.png';
import {isValidPhoneNumber} from 'libphonenumber-js';

const CountryCodeDropdown = () => {
    const [phone, setPhone] = useState('');
    const [isValid,setIsValid] = useState(true);
    const [selectedCode,setSelectedCode] = useState('');
    const [errorMessage,setErrorMessage] = useState('');

    const handleSelectChange = (event) => {
        setSelectedCode(event.target.value);
    };

    const handleLogin = async() => {
        if(!isValidPhoneNumber(`+${phone}`)){
            setIsValid(false);
            setErrorMessage('Invalid Phone Number');
            return;
        }
        //else{
          //  setIsValid(true);
            //setErrorMessage('');
            //console.log('Phone number is valid:', `+${phone}`);
        //}
        try{
            const response = await fetch('/api/send-otp',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({phone: `+${phone}`}),
            });
            const data = await response.json();
            console.log('OTP Sent:', data);
        }
        catch(error){
            console.error('Error sending OTP:', error);
        }
    }

    const handleSendOtp = async() => {
        const formattedPhone = `+${phone}`;
        
        if(!isValidPhoneNumber(formattedPhone)){
            alert('Invalid Phone Number');
            return;
        }

        try{
            const response = await fetch('/api/send-otp',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({phone: formattedPhone}),
            });

            const data = await response.json();
            if(data.success){
                console.log('OTP Sent:',data);
            }
            else{//}
        }
    }

    const countryCodes = [
        {code: '+91', name: 'India', flag: 'https://flagcdn.com/in.svg'},
        {code: '+971', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg'},
        {code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg'},
        {code: '+1', name: 'United States', flag: 'https://flagcdn.com/us.svg'}  
    ];

    return(
        <div className="phone-number-container">
            <h2>Login with phone number</h2>
            <PhoneInput country={'india'} value={phone} onChange={(value) => setPhone(value)} inputStyle={{width: '100%',height: '40px'}}/>
            {!isValid && <p style={{color: 'red'}}>{errorMessage}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default CountryCodeDropdown;