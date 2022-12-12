import { AllOutOutlined, ArrowLeft, AudioFileOutlined, FileOpenOutlined, ImageOutlined, VideoFileOutlined } from "@mui/icons-material";
import React, { useRef, useState } from "react";

export default function Navbar() {
    const [closed, setClosed] = useState(false);

    const handleClick = () => {
        if(closed === false)  {
            setClosed(true)
        } else setClosed(false)
    }
  return (
    <div className={`navbar ${closed && "links-container-closed"}`}>
        
        <div className={`links-container ${closed && "links-container-closed"}`}>
            <div className="link">
                <AllOutOutlined />
                <span>ALL</span>
            </div>

            <div className="link">
                <VideoFileOutlined />
                <span>VIDEOS</span>
            </div>

            <div className="link">
                <AudioFileOutlined />
                <span>AUDIO</span>
            </div>

            <div className="link">
                <ImageOutlined />
                <span>IMAGES</span>
            </div>

            <div className="link">
                <FileOpenOutlined />
                <span>FILES</span>
            </div>
        </div>
        <button onClick={handleClick}><ArrowLeft /></button>
    </div>
  );
}