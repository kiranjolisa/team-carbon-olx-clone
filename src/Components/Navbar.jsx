import React from 'react'
import Modal from "react-modal";
import { NavbarWrapper, SellButton, StyledLink, NavLogo } from './styles'
import { Link } from "react-router-dom";
import {FiSearch} from "react-icons/fi"
import {RiArrowDownSLine} from "react-icons/ri"
import olxPostLogo from '../Assets/olxPostLogo.svg';
import { indianStates } from './AttributeForm/AttributeFormElements'
import Authentication from "./Authentication"
import styles from "./Modal.module.css"
import { useHistory } from 'react-router-dom';
import { Profile } from './Profile/Profile';

export const Navbar = () => {

    const [show, setShow] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const history = useHistory()

    const handleSearch = () => {
        if(query === "cars") {
            history.push("/cars")
        }
        else if(query === "motorcycles") {
            history.push("/motorcycles")
        }
        else if(query === "mobiles") {
            history.push("/mobiles")
        }
        else if(query === "salesHouse") {
            history.push("/salesHouse")
        }
        else if(query === "scooters") {
            history.push("/scooters")
        }
        else if(query === "commerical") {
            history.push("/commerical")
        }
        else if(query === "rentHouse") {
            history.push("/rentHouse")
        }
    }

    return (
        <NavbarWrapper>

            <NavLogo to = "/">
                <img src={olxPostLogo} alt="logo"/>
            </NavLogo>

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
                <input type="text" value = {query} onChange = {(e) => setQuery(e.target.value)} placeholder = "Find Cars, Mobile Phones and more..." />
            </div>
            <div >
                <button onClick = {handleSearch} ><FiSearch size = "25px"/></button>
            </div>
            <div>
                <span>ENGLISH <RiArrowDownSLine/> </span>
            </div>
            <div>
                {/* <button onClick = {() => setShow(true) } >Login</button> */}
                <Profile/>
                <Modal className = {styles.modal} isOpen = {show} onRequestClose = {() => setShow(false)} style={{ overlay: { backgroundColor: "#333333", opacity: "1"}}}>
                    <Authentication/>
                </Modal>
            </div>
                <SellButton>
                    <StyledLink to = '/post'>+ SELL</StyledLink>
                </SellButton>
        </NavbarWrapper>
    )
}
