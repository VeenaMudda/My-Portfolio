import React from 'react';
import './index.css';
import logo from '../pictures/portfolio_logo.jpg';
import CountryCodeDropdown from '../CountryCodeDropdown';

const Login = ({onClose,children}) => {
    return(
        <div className="login-container">
            <img src={logo} className='login-logo' alt='login logo'/>
            <h1>Welcome to MUA Hub</h1>
            <p>Enter your phone number to login</p>
            <CountryCodeDropdown/>
        </div>
    )
}

export default Login;