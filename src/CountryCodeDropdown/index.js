import { useState } from 'react';
import './index.css';
import PhoneInput from 'react-phone-input-2';

const CountryCodeDropdown = () => {
    const [phone, setPhone] = useState('');
    const [selectedCode,setSelectedCode] = useState('');
    
    const countryCodes = [
        {code: '+91', name: 'India', flag: 'https://flagcdn.com/in.svg'},
        {code: '+971', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg'},
        {code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg'},
        {code: '+1', name: 'United States', flag: 'https://flagcdn.com/us.svg'}  
    ];

    return(
        <div className="phone-number-container">
            <label>Select Country Code: </label>
            <PhoneInput country={'india'} value={phone} onChange={(phone) => setPhone(phone)}/>
            <select id='countryCode' value={selectedCode} onChange={handleSelectChange}>a</select>
        </div>
    )
}

export default CountryCodeDropdown;