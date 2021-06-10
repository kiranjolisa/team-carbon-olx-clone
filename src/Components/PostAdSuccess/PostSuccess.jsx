import { useEffect } from "react";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Header, MainContainer } from '../PostAd/PostAdStyles';
import SuccessTick from "../../Assets/PostSuccess.svg" 
import { SubHeader } from "../PostAd/RenderCategoriesStyles";
import businessLogo from "../../Assets/business_multi.png"
import { HomeLink, SpacingDiv } from "./PostSuccessStyles";

export const PostSuccess = () => {
    useEffect(() => {
        document.title = "OLX || Posted Successfully"
    }, [])

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