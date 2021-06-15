import React from 'react'

import { NavbarWrapper, SellButton, StyledLink } from './styles'
import { Link } from "react-router-dom";
import {FiSearch} from "react-icons/fi"
import {RiArrowDownSLine} from "react-icons/ri"
import olxPostLogo from '../Assets/olxPostLogo.svg';
import { indianStates } from './AttributeForm/AttributeFormElements'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link to = '/'>
                <img src={olxPostLogo} alt="logo" />
            </Link>
            <div>
                <select>
                    <option value="">SELECT</option>
                    {indianStates.map((item, i) => (
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
                <SellButton>
                    <StyledLink to = '/post'>+ SELL</StyledLink>
                </SellButton>
        </NavbarWrapper>
    )
}
