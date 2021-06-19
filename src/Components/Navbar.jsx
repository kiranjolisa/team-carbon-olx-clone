import React from 'react'
import Modal from "react-modal";
import {useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {FiSearch} from "react-icons/fi"

import { NavbarWrapper, SellButton, StyledLink} from './styles'
import olxPostLogo from '../Assets/olxPostLogo.svg';
import { indianStates } from './AttributeForm/AttributeFormElements'
import Authentication from "./Authentication"
import styles from "./Modal.module.css"
import { Profile } from './Profile/Profile';
import { switchToEnglish, switchToHindi } from '../Redux/LanguageTranslator/action';
import { wordHashes } from "../Utils/BilingualData"
export const Navbar = () => {

    const [show, setShow] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const history = useHistory()
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.lang);
    const isAuth = useSelector(state => state.userAuthentication.auth);

    const handleSearch = () => {
        if(query === "cars") {
            history.push("/cars")
        }
        else if(query === "motor cycles") {
            history.push("/motorcycles")
        }
        else if(query === "mobiles") {
            history.push("/mobiles")
        }
        else if(query === "sales") {
            history.push("/salesHouse")
        }
        else if(query === "scooters") {
            history.push("/scooters")
        }
        else if(query === "commerical") {
            history.push("/commerical")
        }
        else if(query === "rent") {
            history.push("/rentHouse")
        }
    }

    const handleLanguageSwitch = (e) => {
        console.log(e.target.value);
        if (e.target.value === "en") {
        dispatch(switchToEnglish() );
        } else {
        dispatch(switchToHindi());
        }
    };

    return (
        <NavbarWrapper>
            <div>
                <Link to = '/'>
                    <img src={olxPostLogo} alt="logo" />
                </Link>
            </div>
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
                <select onChange = {handleLanguageSwitch}>
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                </select>
            </div>
            <div>
                {!isAuth && <button onClick = {() => setShow(true) } >{wordHashes.login[language]}</button>}
                
                {isAuth && <Profile/> }
                <Modal className = {styles.modal} isOpen = {show} onRequestClose = {() => setShow(false)} style={{ overlay: { backgroundColor: "none", opacity: "1"}}}>
                    <Authentication/>
                </Modal>
            </div>
            <div>
                <SellButton>
                        <StyledLink to = '/post'>+ {wordHashes.sell[language]}</StyledLink>
                </SellButton>
            </div>
                
        </NavbarWrapper>
    )
}
