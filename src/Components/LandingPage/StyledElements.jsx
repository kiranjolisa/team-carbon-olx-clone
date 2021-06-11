import styled from "styled-components";
import { Link } from "react-router-dom";

export const SellButton = styled.div`
box-shadow : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius:20px; 
height : 40px; 
width : 100px;
margin : auto;
border-top : 4px solid #23e5db;
border-left : 4px solid #ffce32;
border-right : 4px solid #3a77ff;
border-bottom : 4px solid #ffce32;
display : flex;
justify-content : center;`

export const StyledLink = styled(Link)`
text-decoration : none;
color: black;
font-size : 1.2em;
margin : auto;`

export const ContainerDiv = styled.div`
display : flex;
justify-content : center;
height : 100vh;
width : 100vw;`