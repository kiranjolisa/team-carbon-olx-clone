import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Header, MainContainer } from './PostAdStyles';
import { RenderCategories } from "./RenderCategories";
export const PostAd = () => {
    useEffect(() => {
        document.title = "OLX || Post Advertisement"
    }, [])

    return (
    <MainContainer>
        <Navbar />
        <Header>POST YOUR AD</Header>
        <RenderCategories />
    </MainContainer>
    );
}