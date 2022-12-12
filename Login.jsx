import {CloseOutlined, FacebookOutlined, Google } from '@mui/icons-material';
import React, { useState } from 'react';

const Login = () => {
    const [closed, setClosed] = useState("flex");
    const handleClose = () => {
        setClosed("none");
    }

    const handleSubmit = (e) => {
        e.prevebtDefault();

    }


    return (
        <div className='login' style={{
            display: closed
        }}>
            <form onClick={handleSubmit}>
            <div className="close" onClick={handleClose}>
                <CloseOutlined />
            </div>
                <h1 className='title'>Log In With:</h1>
                <div className="buttons-container">
                    <button className='google'><Google /> <span>Google</span></button>
                    <button><FacebookOutlined /> <span>Facebook</span></button>
                </div>
                <h1 className='title'>OR</h1>
                <label htmlFor="email">Username/Email:</label>
                <input type="text" id="email" className='input'/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" className='input' />
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
