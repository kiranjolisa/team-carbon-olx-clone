import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5%;
    background: #F7F8F9;
    border: 1px solid #EEEEEE;

    div:nth-child(1) {
        margin-left: 7%;
    }

    img {
     height: 6vh;
    }

    div:nth-child(2) > select {
        border: 2px solid #002F34;
        border-radius: 3px;
        height: 6vh;
        width: 260px;
        margin-left: 10%;
        padding-left: 1%;
        font-size: 17px;
        cursor: pointer;
    }
    

    div:nth-child(2) > select:hover {
        border: 2px solid #23E5DB;
    }

    div:nth-child(3) > input {
        border: 2px solid #002F34;
        border-radius: 3px;
        height: 5.2vh;
        width: 550px;
        margin-left: 7%;
        font-size: 15px;
        padding-left: 1%;
    }

    div:nth-child(3) > input:hover {
        border: 2px solid #23E5DB;
    }

    div:nth-child(4) > button {
        border: 2px solid #002F34;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        height: 6vh;
        width: 50px;
        background: #002F34;
        color: #ffffff;
        outline: none;
        cursor: pointer;
    }

    div:nth-child(5) > select {
        border: none;
        margin: 15% 0 0 10%;
        font-size: 15px;
        color: #002F34;
        font-weight: 700;
        cursor: pointer;
        background: #F7F8F9;
        outline: none;
    }

    div:nth-child(6) > button {
        border: none;
        border-bottom: 2px solid #002F34;
        outline: none;
        margin: 11% 30px 0 20%;
        font-size: 15px;
        color: #002F34;
        background: #F7F8F9;
        font-weight: 700;
        cursor: pointer;
    }
`
export const SellButton = styled.div`
    box-shadow : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 35px; 
    height : 35px; 
    width : 90px;
    margin : auto;
    margin-right: 5%;
    border-top : 6px solid #23e5db;
    border-left : 6px solid #ffce32;
    border-right : 6px solid #3a77ff;
    border-bottom : 6px solid #3a77ff;
    display : flex;
    justify-content : center;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    text-decoration : none;
    color: #002F34;
    font-size : 1em;
    font-weight: 700;
    margin : auto;
`

export const RoutesNavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 10px solid #F7F8F9 ;
    background-color: #FFFFFF;
    font-size: 15px;
    padding: 10px;
    border: 1px solid #EEEEEE;

    div:nth-child(1) {
        margin-left: 7%;
        margin-right: 1%;
        font-size: 15px;
        color: #002F34;
        font-weight: 700;
    }

    a{
        text-decoration: none;
        color: #002F34;
        margin: 5px 12px 5px 5px;
        font-size: 15px;
    }

    a:hover {
        color: #23e5db;
    }
`

export const FooterWrapper = styled.div`
    border: 1px solid #EBEEEF;
    display: flex;
    flex-direction: row;
    background: #EBEEEF;
    height: 28vh;
    margin-top: 21%;

    div:nth-child(1) {
        margin-left: 10%;
        margin-right: 6%;
        text-align: left;
    }

    div:nth-child(2) {
        text-align: left;
    }

    div:nth-child(3) {
        margin-left: 5%;
        margin-right: 8%;
        text-align: left;
    }

    div:nth-child(4) {
        text-align: left;
    }

    div:nth-child(5) {
        margin-left: 5.5%;
        text-align: left;
    }

    div:nth-child(5) > h4 {
        margin-bottom: -1%;
        color: #002F34;
    }

    div:nth-child(5) > .icons{
        display: flex;
        flex-direction: row;
        margin: 1% 0 0 -12%;
        color: #5C7A7D;
        cursor: pointer;
    }

    div:nth-child(5) > .appButton {
        display: flex;
        margin: 27% 0 0 -5%;
    }

    div:nth-child(5) > .appButton > button {
        border: 1px solid #EBEEEF;
        background: #EBEEEF;
        cursor: pointer;
    }

    p {
        margin: 0;
        font-size: 13px;
        color: #5C7A7D;
    }
`

export const FooterWrapperBottom = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #002F34;
    background: #002F34;
    color: #fff;
    font-size: 13px;
    height: 8vh;

    div:nth-child(1) {
        margin-left: 9%;
        margin-right: 46%;
    }
`
export const LoadingWrapper = styled.div`
    border: 12px solid #f3f3f3;
    border-radius: 50%;
    border-top: 12px solid #002F34;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 10px auto;
    margin-top: 12%;

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(0deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const CardWrapper = styled.div`
    border: 1px solid #CCD5D6;
    border-radius: 5px;
    text-align: left;
    margin: 0.6%;
    cursor: pointer;
    flex-basis: 23.5%;

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div:nth-child(1) > div {
        flex-grow: 1;
    }

    div:nth-child(1) > img{
        height: 20vh;
        margin-top: 2%;
        max-width: 85%;
    }

    div:nth-child(1) > button {
        height: 5vh;
        border: 0;
        outline: none;
        background: #ffffff;
        font-size: 20px;
        cursor: pointer;
        margin: 3% 0 0 0;
    }

    div:nth-child(2) {
        margin: 0 0 0 5%;
    }

    div:nth-child(2) > p:nth-child(1) {
        font-size: 20px;
        font-weight: 700;
        color: #002F34;
        margin-bottom: -0.9%;
    }

    div:nth-child(2) > p:nth-child(2) {
        font-size: 14px;
        margin-bottom: -0.9%;
        color: #5C7A7D;
    }

    div:nth-child(2) > p:nth-child(3) {
        font-size: 14px;
        margin-bottom: -0.1%;
        color: #5C7A7D;
    }

    div:nth-child(3) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 2%;
        padding-right: 2%;
        font-size: 12px;
    }

    div:nth-child(3) > p:nth-child(1) {
        margin-left: 3.5%;
    }

`

export const CardLinkWrap = styled(Link)`
text-decoration : none;
color : inherit;`

export const LoadMore = styled.div`
    button {
        border: 2px solid #002F34;
        border-radius: 3px;
        padding: 1%;
        font-size: 17px;
        color: #002F34;
        margin-top: 0.5%;
        cursor: pointer;
    }

    button:hover {
        border: 4px solid #002F34;
        color: #002F34;
        padding: 0.9%;
    }

`
export const CarouselCardWrapper = styled.div`
    border: 1px solid #CCD5D6;
    border-radius: 5px;
    text-align: left;
    margin: 0.5%;
    cursor: pointer;
    flex-basis: 22%;

    div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    div:nth-child(1) > div {
        flex-grow: 1;
    }

    div:nth-child(1) > img{
        height: 20vh;
        margin-top: 2%;
        max-width: 85%;
    }

    div:nth-child(1) > button {
        height: 5vh;
        border: 0;
        outline: none;
        background: #ffffff;
        font-size: 20px;
        cursor: pointer;
        margin: 3% 0 0 0;
    }

    div:nth-child(2) {
        margin: 0 0 0 5%;
    }

    div:nth-child(2) > p:nth-child(1) {
        font-size: 20px;
        font-weight: 700;
        color: #002F34;
        margin-bottom: -0.9%;
    }

    div:nth-child(2) > p:nth-child(2) {
        font-size: 14px;
        margin-bottom: -0.9%;
        color: #5C7A7D;
    }

    div:nth-child(2) > p:nth-child(3) {
        font-size: 14px;
        margin-bottom: -0.1%;
        color: #5C7A7D;
    }

    div:nth-child(3) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 2%;
        padding-right: 2%;
        font-size: 12px;
    }
`
export const Scroll = styled.div`
    position: fixed;
    top: 0;
    left: 45%;
    border-radius: 5px;
    color: #002F34;
    z-index: 1;

    button{
        margin-top: 10px;
        animation: scrollTop 0.5s alternate ;
        border: 1px solid #ffffff;
        border-radius: 20px;
        box-shadow : 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
        outline: none;
        background: #ffffff;
        color: #002F34;
        font-size: 15px;
        font-weight: 600;
        padding: 8px;
        width: 170px;
        cursor: pointer;
    }

    @keyframes scrollTop {
        from {
            transform: translateY(2px);
        }
        
        to {
            transform: translateY(-1px);
        }
    }
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5%;

    button:nth-child(1) {
        border: 1px solid #F7F8F9;
        background: #F7F8F9;
        cursor: pointer; 
        color: #002F34;
    }

    button:nth-child(2) {
        border: 1px solid #F7F8F9;
        background: #F7F8F9;
        margin-left: 1.5%;
        cursor: pointer; 
        color: #002F34;
    }

    button:nth-child(1):hover, button:nth-child(2):hover {
        border: 1px solid #8bf7f2;
        border-radius: 50%;
        background: #8bf7f2;
    }

    button:nth-child(3) {
        border: 1px solid #F7F8F9;
        background: #F7F8F9;
        margin-left: 2%;
        margin-bottom: -1%;
        width: 15vh;
        cursor: pointer; 
    }
`

export const ProfileFeaturesWrapper = styled.div`

    div:nth-child(1) {
        display: flex;
    }

    div:nth-child(1) > img {
        width: 70px;
        height: 70px;
    }

    div:nth-child(1) > div {
       margin-left: 10px;
    }

    div:nth-child(1) > div > div:nth-child(1) {
        color: #899FA1;
    }
    div:nth-child(1) > div > div:nth-child(2) {
        margin-top: 3%;
        margin-bottom: 3%;
        color: #002F34;
    }
`

export const ProfileItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 5%;
    margin-top: 6%;
    font-size: 17px;

    :hover {
        background: #EAF2FF;
    }

    a {
        text-decoration: none;
        color: #002F34;
    }

    div:nth-child(2) {
        margin-left: 5%;
        margin-top: 2%;
    }
`

export const AdsWrapper = styled.div`

    margin-top: 2%;

    a {
        text-decoration: none;
        color: #002F34;
        font-size: 14px;
        margin: 0 0 0 1%;
        text-align: left;
    }

    a:nth-child(2) {
        text-decoration: none;
        color: #002F34;
        font-size: 14px;
        margin-right: 75%;
        text-align: left;
    }
`

export const AdImage = styled.img`
max-width : 1200px;
margin-top : 1%;
height : 250px;
&:hover{
    cursor : pointer;
}`