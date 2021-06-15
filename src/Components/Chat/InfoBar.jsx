import React from "react";

import closeIcon from '../../Assets/closeIcon.png'
import onlineIcon from '../../Assets/onlineIcon.png'

import { RightInnerContainer, 
    LeftInnerContainer, 
    OnlineIcon, 
    InfoMainDiv } from "./InfoBarElements";

const InfoBar = ( {room = "INBOX"} ) => {
    return <InfoMainDiv >
        <LeftInnerContainer>
          <OnlineIcon src = {onlineIcon} alt = "online_image"/>
          <h3>{room}</h3>  
        </LeftInnerContainer>
        <RightInnerContainer>
            <a href = '/'>
                <img src = {closeIcon} alt = "close_image"/>
            </a>
        </RightInnerContainer>
    </InfoMainDiv>
}

export default InfoBar;