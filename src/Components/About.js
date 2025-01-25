import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return(
        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt='' />
            </div>
            <div className='about-section-text-container'>
                <p className="primary-sunheading">About</p>
                <h1>
                    Food Is An Important Part Of A Balanced Diet.
                </h1>
                <p className="primary-text">
                    lorem ipsum jduu jjsnxbjhs jsjahashakjad qwjhsdhajkkdi
                </p>
                <p className='primary-text'>
                    hjzhzchmch shjzcjcz chskj jzjkzchmzczc jzhhzchzcnzij jkzchzchnmzcjh.
                    hhsksdadjjhznmz nkxmjscjzclq.
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'>
                        {" "}
                        <BsFillPlayCircleFill />Watch Video
                    </button>
                </div>
            </div>
        </div>
    )
}
export default About;