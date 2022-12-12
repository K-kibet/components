import { CloseOutlined } from '@mui/icons-material';
import React, { useEffect, useMemo, useState } from 'react';

const ModalSuccess = () => {
    const [closed, setClosed] = useState("flex");
    const handleClose = () => {
        setClosed("none");
    }
    return (
        <div className='modal' style={{
            display: closed
        }} >
            <div className="top"> 
                <span>SUCCESS</span>
                <CloseOutlined className='close' onClick={handleClose}/>
            </div>
            <div className="content">
                <span>
                    Your file was uploaded to cloud
                </span>
            </div>
            
            <div className="bottom">
                <button>
                    VIEW
                </button>
                <button onClick={handleClose}>
                    CLOSE
                </button>
            </div>
        </div>
    );
}

export default ModalSuccess;
