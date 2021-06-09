import { Link } from "react-router-dom";
import styled from "styled-components";

export const BorderBox = styled.div`
border: 1px solid rgba(0,47,52,.2);
border-radius: 4px;
width : 60vw;
margin-bottom : 10vh;`

export const SubHeader = styled.h3`
padding: 24px 30px 16px;
font-size: 16px;
line-height: 1.5;
margin: 0;
font-weight: 500;
text-transform: uppercase;
font-weight: 700;
color: #002f34;`

export const CategoriesList = styled.ul`
width: 50%;
margin-left: auto;
left: auto;
right: auto;
margin: 0;
padding: 0;
position: relative;
border: 1px solid rgba(0,47,52,.2);
border-left: none;
float: left;
min-height: 1px;
box-sizing: border-box;
margin: 0;
display: block;
list-style-type: disc;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;`

export const CategoryItems = styled.li`
list-style: none;
padding: 8px;
cursor: pointer;
font-size: 16px;
font-weight: 400;
display: flex;
align-items: center;
line-height: 2;
color: rgba(0,47,52,.64);
border-bottom : 1px solid rgba(0,47,52,.2);
&:hover{
    color: #002f34;
    background-color: rgba(0,47,52,.2);
}
&:active{
    color: #002f34;
    background-color: rgba(0,47,52,.2);
}
`

export const ItemName = styled.span`
width: 100%;
margin-left: 16px;
pointer-events: none;`;

export const PostAttributeLink = styled(Link)`
text-decoration : none;
color: rgba(0,47,52,.64);
&:hover{
    color: #002f34;
}`

export const Categories = [
    {
        title : "OLX Autos (Cars)",
        subCategories : ['Cars']
    }, 
    {
        title : "Properties",
        subCategories : ['For Sale : Houses And Apartments']
    }, 
    {
        title : "Mobiles",
        subCategories : ['Mobile Phones']
    }, 
    {
        title : "Jobs",
        subCategories : ['Data Entry And Back office']
    }, 
    {
        title : "Bikes",
        subCategories : ['Motorcycles']
    }, 
    {
        title : "Electronics & Appliances",
        subCategories : ['Fridges']
    }, 
    {
        title : "Commercial Vehicles & Spares",
        subCategories : ['Spare Parts']
    }, 
    {
        title : "Furniture",
        subCategories : ['Sofa & Dining']
    }, 
    {
        title : "Fashion",
        subCategories : ['Men']
    }, 
    {
        title : "Books, Sports & Hobbies",
        subCategories : ['Books']
    }, 
    {
        title : "Pets",
        subCategories : ['Dogs']
    }, 
    {
        title : "Services",
        subCategories : ['Drivers And Taxi']
    }
    
]