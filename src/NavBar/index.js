import React, { useState } from 'react';
import './index.css';
import portfolio_logo from '../pictures/portfolio_logo.jpg';
import BeautyClub from '../BeautyClub';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import Login from '../Login';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () =>{
    const isSmallScreen = useMediaQuery('(max-width: 360px');
    const [anchorEl,setAnchorEl] = useState(null);
    const [openMenu,setOpenMenu] = useState(false);
    const [isIconOpen, setIsIconOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
    }

    const openBeauty = (e) => {
        return(<BeautyClub/>)
    }

    const [showLogin,setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(!showLogin);
    }

    const handleMenuClick = (event) => {
        if(isIconOpen === true){
            setAnchorEl(null)
        }
        else{
            setAnchorEl(event.currentTarget);
        }
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return(
        <>
            <AppBar position='static' color='white'>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Link to={"/"}><img src={portfolio_logo} alt='portfolio logo' className='portfolio-logo'/></Link>
                    {isSmallScreen ? 
                    <div>
                        {isIconOpen ? <IconButton onClick={handleMenuClick}><CloseIcon/></IconButton> : <IconButton onClick={handleMenuClick}><MenuIcon/></IconButton>}
                        <IconButton onClick={handleMenuClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose}>
                                <Link to={'/beauty'} className='navbar-link'>Beauty Club</Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Link to={'/community'} className='navbar-link'>Community</Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Link to={'/about-us'} className='navbar-link'>About Us</Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <p onClick={handleLogin} className='navbar-link'>{showLogin ? 'Close Login' : 'Member Login'}</p>
                            </MenuItem>
                        </Menu>
                    </div> : <div><div className='links-container'>
                    </div></div>}
                </Toolbar>
            </AppBar>
            {showLogin && <Modal className='modal-overlay' onClose={handleLogin}><Login/></Modal>}
        </>
    )
}

export default NavBar;