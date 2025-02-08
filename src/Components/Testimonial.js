import React from 'react';
import ProfilePic from "./Assats/";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return(
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className='primary-subheading'>Testimonial</p>
                <h1 className='primary-heading'>What they are saying</h1>
                <p className='primary-text'>
                    hbdcdmgaaxd hjxbyajaxb haadbk  hSJSHGjk hjxysJHKXk 
                    jhhasdxukh.x Xshkaxhmxg jkxYXuyhbxHUKX hxalacila;asab haxgxsBX.
                </p>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt='' />
                <p>
                    nh,kgfhsadj jhsvfbsajgysw sdhc jydscsn cbhjsh,a.
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <h2>John Doe</h2>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;