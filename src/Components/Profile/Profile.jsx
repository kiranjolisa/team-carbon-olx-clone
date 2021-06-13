import React from 'react'
import Modal from "react-modal";
import {FiMessageCircle} from "react-icons/fi"
import {IoMdNotificationsOutline} from "react-icons/io"
import avatar from "../../Assets/avatar.png"
import {RiArrowDownSLine} from "react-icons/ri"
import {ProfileWrapper} from "../styles"
import { ProfileFeatures } from './ProfileFeatures';

export const Profile = () => {

    const [show, setShow] = React.useState(false)

    return (
        <ProfileWrapper>
            <button><FiMessageCircle  size = "25px"/></button>
            <button><IoMdNotificationsOutline size = "25px"/></button>
            <button onClick = {() => setShow(true) }>
                <img src= {avatar} alt="profileImage" /> <RiArrowDownSLine size = "25px"/>
            </button>
            <Modal isOpen = {show} onRequestClose = {() => setShow(false)} style={{ overlay: { backgroundColor: "none", opacity: "1", width: "25%", height: "540px" ,marginLeft: "61%", marginTop: "1%"}}}>
                <ProfileFeatures/>
            </Modal>
            
        </ProfileWrapper>
    )
}
