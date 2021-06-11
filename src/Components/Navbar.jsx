import React from 'react'

import { NavbarWrapper, SellButton, StyledLink } from './styles'
import { Link } from "react-router-dom";
import {FiSearch} from "react-icons/fi"
import {RiArrowDownSLine} from "react-icons/ri"

// import { SellButton, StyledLink } from './LandingPage/StyledElements'
import olxPostLogo from '../Assets/olxPostLogo.svg';


export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link to = '/'>
                <img src={olxPostLogo} alt="logo" />
            </Link>
            <div>
                <select>
                    <option value="">SELECT</option>
                    {["Assam", "Uttar Pradesh", "West Bengal"].map((item, i) => (
                        <option key = {i} value = {item} >
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" placeholder = "Find Cars, Mobile Phones and more..." />
            </div>
            <div >
                <button><FiSearch size = "25px"/></button>
            </div>
            <div>
                <span>ENGLISH <RiArrowDownSLine/> </span>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div style = {{marginLeft:"20px"}}>
            <SellButton>
            <StyledLink to = '/post'>+ SELL</StyledLink>
            </SellButton>
            </div>
        </NavbarWrapper>
    )
}
