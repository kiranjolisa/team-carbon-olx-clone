import React from 'react'
import {TiSocialFacebookCircular, TiSocialTwitter} from "react-icons/ti"
import {IoLogoInstagram} from "react-icons/io"
import {BiPlayCircle} from "react-icons/bi"
import {FooterWrapper} from "./styles"
import {FooterWrapperBottom} from "./styles"

export const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <div>
                <h4>POPULAR LOCATIONS</h4>
                <p>Kolkata</p>
                <p>Mumbai</p>
                <p>Chennai</p>
                <p>Pune</p>
            </div>
            <div>
                <h4>TRENDING LOCATION</h4>
                <p>Bhubaneshwar</p>
                <p>Hyderabad</p>
                <p>Chandigarh</p>
                <p>Nashik</p>
            </div>
            <div>
                <h4>ABOUT US</h4>
                <p>About OLX Groups</p>
                <p>Careers</p>
                <p>Contact Us</p>
                <p>OLXPeople</p>
                <p>Waah Jobs</p>
            </div>
            <div>
                <h4>OLX</h4>
                <p>Help</p>
                <p>Sitemaps</p>
                <p>Leagal & Privacy information</p>
            </div>
            <div>
                <h4>FOLLOW US</h4>
                <div className = "icons" >
                    <div><TiSocialFacebookCircular size = "25px"/></div>
                    <div><IoLogoInstagram size = "25px" /></div>
                    <div><TiSocialTwitter size = "25px" /></div>
                    <div><BiPlayCircle size = "25px" /></div>
                </div>
                <div className = "appButton">
                    <button><img src="https://statics.olx.in/external/base/img/appstore.webp" alt="appleimage"/></button>
                    <button><img src="https://statics.olx.in/external/base/img/playstore.webp" alt="playstore" /></button>
                </div>
            </div>
            
        </FooterWrapper>
        <FooterWrapperBottom>
            <div>
                <p>Other Countries  Pakistan-South Africa-Indonesia</p>
            </div>
            <div>
                <p>Free Classifieds in India. © 2006-2021 OLX</p>
            </div>
        </FooterWrapperBottom>
        </>
    )
}
