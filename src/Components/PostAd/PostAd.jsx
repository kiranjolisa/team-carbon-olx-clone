import { useEffect } from "react";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Header, MainContainer } from './PostAdStyles';
import { RenderCategories } from "./RenderCategories";

export const PostAd = () => {
    useEffect(() => {
        document.title = "OLX || Post Advertisement"
    }, [])

    return (
    <MainContainer>
        <Navbar/>
        <Header>POST YOUR AD</Header>
        <RenderCategories />
        <Footer/>
    </MainContainer>
    );
}