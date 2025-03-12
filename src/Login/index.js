import React, { useState } from 'react';
import './index.css';
import logo from '../pictures/portfolio_logo.jpg';
import CountryCodeDropdown from '../CountryCodeDropdown';

const Login = ({onClose,children}) => {
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;

        if(/^\d{0,10}$/.test(input)){
            setPhone(input);
        }
    }

    const handleRegister = async() => {
        try{
            const response = await fetch('http://localhost:3001/api/register',{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({phone}),
            });

            const data = await response.json();
            setMessage(data.error);
            console.log(data.error);
            if(response.ok){
                setPhone('');
            }
        }

        catch(error){
            console.log(error);
            setMessage('Error saving phone number');
        }
    }

    return(
        <div className="login-container">
            <img src={logo} className='login-logo' alt='login logo'/>
            <h1>Welcome to MUA Hub</h1>
            <p>Enter your phone number to login</p>
            <div className='register-container'>
                <input type="text" placeholder="Enter phone number" className='phone-number' value={phone} onChange={handleChange}/>
                <p className='message'>{message}</p>
                <button disabled={phone.length !== 10} onClick={handleRegister} className='register-button'>Register</button>
            </div>
        </div>
    )
}

export default Login;