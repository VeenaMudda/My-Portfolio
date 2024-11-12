import React from 'react';
import './index.css';

const Modal = ({onClose,children}) => {
    return(
        <div className='modal-overlay'>
            <div className='close-modal-container'>
                <div className='close-container'><button className='close-login' onClick={onClose}>X</button></div>
                {children}
            </div>
        </div>
    )
}

export default Modal;