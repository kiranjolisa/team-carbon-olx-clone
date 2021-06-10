import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Header, MainContainer } from '../PostAd/PostAdStyles';
import SuccessTick from "../../Assets/PostSuccess.svg" 
import { SubHeader } from "../PostAd/RenderCategoriesStyles";
import businessLogo from "../../Assets/business_multi.png"
import { HomeLink, SpacingDiv } from "./PostSuccessStyles";
import { unsetSuccessStatus } from "../../Redux/PostData/action";


export const PostSuccess = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = "OLX || Posted Successfully"
        dispatch(unsetSuccessStatus());

    }, [dispatch])

    return (
    <MainContainer>
        <Navbar/>
        <img src = {SuccessTick} alt = "Success tag"/>
        <Header>Congratulations!</Header>
        <SubHeader>Your ad is live now</SubHeader>
        <img src = {businessLogo} height = "250px" width = "200px" alt = "Business tag"/>
        <SpacingDiv></SpacingDiv>
        <HomeLink to = '/'>Goto Home</HomeLink>
        <Footer/>
    </MainContainer>
    );
}