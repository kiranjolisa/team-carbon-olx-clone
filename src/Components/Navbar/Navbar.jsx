import { Link } from "react-router-dom"
import { LeftArrow, LinkedArrow, NavLogo, StyledNav } from "./NavbarStyles";
import leftArrow from '../../Assets/leftArrow.svg';
import olxPostLogo from '../../Assets/olxPostLogo.svg';

export const Navbar = () => {
    return (
        <StyledNav>
            <LinkedArrow to = '/'>
            <span><LeftArrow src = {leftArrow} alt = 'left arrow icon'/></span>
            </LinkedArrow>

            <Link to = '/'>
            <NavLogo 
            src = {olxPostLogo} 
            alt = 'Olx Logo' />
            </Link>
        </StyledNav>
    );
}