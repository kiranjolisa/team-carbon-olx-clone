import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubHeader = styled.h2`
color : rgb(0, 47, 52);`

export const SpacingDiv = styled.div`
height : 50vh;
display : flex;
flex-direction : column;`

export const HomeLink = styled(Link)`
color: #fff;
background-color: #002f34;
border-radius: 4px;
border: 5px solid #002f34;
padding: 7px;
text-align : center;
cursor : pointer;
font-size : 1em;
font-weight: 700;
line-height: 1.15;
text-decoration : none;
margin : 20px;
height : 45px;
width : 100px;
&:hover{
    background-color : #fff;
    color : #002f34;
}`