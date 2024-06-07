"use client"
import { Play } from 'lucide-react';
import React, { useState } from 'react';

interface PopupIframeProps {

    _id: string;
    imageURL: string;
    VideoUrlPreview: String;


}

const PopupIframe = ({ _id, imageURL, VideoUrlPreview }: PopupIframeProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div >
            <div onClick={togglePopup} className='relative p-2 bg-slate-800 rounded-md w-[450px] h-[300px] flex items-center justify-center' >
                <img src={imageURL} alt="Video Thumbnail" className="rounded-md w-full h-full object-cover" />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 flex cursor-pointer items-center justify-center'>
                    <Play className='w-12 h-12 ' />
                </div>

            </div>

            {isVisible && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={togglePopup}>&times;</span>
                        <iframe
                            src={`${VideoUrlPreview}`}
                            className="popup-iframe"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupIframe;
