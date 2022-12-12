import React, { useEffect, useState } from  'react';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider">
            <div className="arrow"  onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
        
           <div className="wrapper" style={{
            transform: `translateX(${slideIndex * -100}vw)`
           }}>
            <div className="slider">
                <div className="image-container">
                    <img src={Coongames} alt="" />
                </div>
                <div className="info">
                    <h1>COONGAMES</h1>
                    <p>
                         Relax and play platform games like famous Nokia snake game right in your browser.
                    </p>
                    <button>Visit Now</button>
                </div>
            </div>

            <div className="slider">
                <div className="image-container">
                    <img src={Editor} alt="" />
                </div>
                <div className="info">
                    <h1>DEVEDITOR</h1>
                    <p>
                       A free full-featured online code editor for HTML, CSS and JAVASCRIPT.
                    </p>
                    <button>Visit Now</button>
                </div>
            </div>

            <div className="slider">
                <div className="image-container">
                    <img src={Bigplay} alt="" />
                </div>
                <div className="info">
                    <h1>BIGPLAY</h1>
                    <p>
                        Stream and  enjoy playing video content only on bigplay.
                    </p>
                    <button>Visit Now</button>
                </div>
            </div>

            <div className="slider">
                <div className="image-container">
                    <img src={Bigshare} alt="" />
                </div>
                <div className="info">
                    <h1>BIGSHARE</h1>
                    <p>
                        Manage all your file and share with friends, family and the world from one place.

                    </p>
                    <button>Visit Now</button>
                </div>
            </div>
           </div>
            <div className="arrow" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    );
}

export default Slider;