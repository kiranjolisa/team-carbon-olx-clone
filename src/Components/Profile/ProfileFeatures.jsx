import React from 'react'
import {Link} from "react-router-dom"
import {BiSpreadsheet, BiHelpCircle} from "react-icons/bi"
import {RiLogoutBoxLine, RiListSettingsLine,RiDownloadLine } from "react-icons/ri"
import {IoIosBusiness} from "react-icons/io"
import {TiBusinessCard} from "react-icons/ti"
import avatar from "../../Assets/avatar.png"
import {ProfileFeaturesWrapper} from "../styles"
import {ProfileItem} from "../styles"
import { useSelector } from 'react-redux'
import { wordHashes } from "../../Utils/BilingualData";


export const ProfileFeatures = () => {   
    const firstName = useSelector(state => state.userAuthentication.firstName)
    const userDisplayPic= useSelector(state => state.userAuthentication.userDisplayPic)
    const language = useSelector((state) => state.language.lang);

    return (
        <>
        <ProfileFeaturesWrapper>
            <div>
                <img 
                style = {{height : "70px", width : "70px", borderRadius : "50%"}}
                src= {userDisplayPic === ""? avatar : userDisplayPic} alt="avatar" />
                <div>
                    <div>{wordHashes.hello[language]},</div>
                    <div>{firstName === ""?"User" : firstName}</div>
                    <div color = "#002F34;">
                        <Link>{wordHashes.viewAndEditProfile[language]}</Link>
                    </div>
            
                </div>
            </div>
        </ProfileFeaturesWrapper>

        <ProfileItem>
            <div> <BiSpreadsheet size = "30px" color = "#002F34" />
            </div> <div><Link to = "/myAds">{wordHashes.myAds[language]}</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div> <IoIosBusiness size = "30px" color = "#002F34" /> </div>
            <div><Link>{wordHashes.buyBusinessPackages[language]}</Link> </div>
        </ProfileItem>
        <ProfileItem>
            <div> <TiBusinessCard size = "30px" color = "#002F34" /> </div>
            <div><Link>{wordHashes.boughtPackages[language]}</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><BiHelpCircle size = "30px" color = "#002F34" /> </div>
            <div><Link>{wordHashes.help[language]}</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiListSettingsLine size = "30px" color = "#002F34"/></div>
            <div><Link> {wordHashes.settings[language]}</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiDownloadLine size = "30px" color = "#002F34" /> </div>
            <div><Link>{wordHashes.installOlxLite[language]}</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiLogoutBoxLine size = "30px" color = "#002F34" /> </div>
            <div><Link> {wordHashes.logout[language]}</Link></div>
        </ProfileItem>
        </>
    )
}
