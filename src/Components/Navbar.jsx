import React from 'react'
import { NavbarWrapper } from './styles'
import {FiSearch} from "react-icons/fi"
import {RiArrowDownSLine} from "react-icons/ri"

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <img src="olx_logo-removebg.png" alt="logo" />
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
            <div>
                <button>+SELL</button>
            </div>
        </NavbarWrapper>
    )
}
