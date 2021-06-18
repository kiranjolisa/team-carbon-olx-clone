import React from 'react'
import Modal from "react-modal";
import {FiMessageCircle} from "react-icons/fi"
import {IoMdNotificationsOutline} from "react-icons/io"
import avatar from "../../Assets/avatar.png"
import {RiArrowDownSLine} from "react-icons/ri"
import { ProfileWrapper} from "../styles"
import { ProfileFeatures } from './ProfileFeatures';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Profile = () => {

    const [show, setShow] = React.useState(false)
    const userDisplayPic= useSelector(state => state.userAuthentication.userDisplayPic)
    return (
        <ProfileWrapper>
                <Link to = {`/chat?name=Buyer&room=OLX`}>
                    <button><FiMessageCircle  size = "25px"/></button>
                </Link>
            <button><IoMdNotificationsOutline size = "25px"/></button>
            <button onClick = {() => setShow(true) }>
                <img 
                 style = {{height : "40px", width : "40px", borderRadius : "50%"}}
                 src= {userDisplayPic === "" ? avatar : userDisplayPic} alt="profileImage" /> <RiArrowDownSLine size = "25px"/>
            </button>
            <Modal isOpen = {show} onRequestClose = {() => setShow(false)} style={{ overlay: { backgroundColor: "none", opacity: "1", width: "25%", height: "540px" ,marginLeft: "61%", marginTop: "1%"}}}>
                <ProfileFeatures/>
            </Modal>
            
        </ProfileWrapper>
    )
}
