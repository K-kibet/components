import {CloseOutlined} from '@mui/icons-material';
import React, { useState } from 'react';
import Tshirt from "../assets/shirt.png";

const ProductCard = () => {
    const [closed, setClosed] = useState("flex");
    const handleClose = () => {
        setClosed("none");
    }

    const handleSubmit = (e) => {
        e.prevebtDefault();

    }


    return (
        <div className='productcard' style={{
            display: closed
        }}>
            <form onClick={handleSubmit}>
            <div className="close" onClick={handleClose}>
                <CloseOutlined />
            </div>
            <div className="image-container">
                <img src={Tshirt} alt="" />
            </div>
            <div className="content">
                <h1 className='title'>Adidas Original</h1>
                <p>Men's t-shirt wear</p>
                <h2>SIZE</h2>
                <div className="input-container">
                    <input type="checkbox" name="size" id="1" />
                    <input type="checkbox" name="size" id="2" />
                    <input type="checkbox" name="size" id="3" />
                    <input type="checkbox" name="size" id="4" />
                </div>
                <h2>COLOR</h2>
                <div className="input-container">
                    <input type="radio" name="color" id="" />
                    <input type="radio" name="color" id="" />
                    <input type="radio" name="color" id="" />
                    
                </div>
                <div className="buttons-container">
                    <button >BUY NOW</button>
                    <button className='cart'>ADD TO CART</button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default ProductCard;

