import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
display : flex;
height : 12vh;
width : 100vw;
background-color : #f7f8f9;
// box-shadow : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`

export const NavLogo = styled.img`
margin : auto;
margin-top : 10px;
margin-left : 1vw;
height : 50px; 
width : 70px;`

export const LeftArrow = styled.img`
height : 35px;
height : 35px;
margin : auto;`

export const LinkedArrow = styled(Link)`
margin-top : 17px;
margin-left : 1.75vw;`