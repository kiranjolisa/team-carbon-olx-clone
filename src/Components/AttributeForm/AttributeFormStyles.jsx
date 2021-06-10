import styled from 'styled-components';

export const MainDiv = styled.div`
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;`

export const FormContainer = styled.div`
border: 1px solid rgba(0,47,52,.2);
border-radius: 4px;
width : 60vw;
margin-bottom : 10vh;
min-height : 60vh;
`

export const Header = styled.h1`
color : rgb(0, 47, 52);
font-size : 1.5rem;
font-weight : 700;
`
export const DetailsCategory = styled.div`
min-height : 30vh;
width : 100%;
border-bottom : 1px solid rgba(0,47,52,.2);
`

export const InputWrapper = styled.div`
padding : 25px;`

export const Label = styled.label`
color: #002f34;
display: block;
font-size: 0.9em;
line-height: 16px;
margin : 5px;
`

export const Input = styled.input`
appearance: none;
background: none;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
display: block;
font-size: 1.5em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 0px;
line-height: 5px;
&:focus{
    border: 3px solid teal; 
}`

export const FormSpan = styled.span`
color: rgba(0,47,52,.64);
font-size: 0.7em;
line-height : 0;`

export const HeaderDiv = styled.div`
padding : 25px;`

export const TextArea = styled.textarea`
appearance: none;
background: none;
border: 1px solid rgba(0,47,52,.2);
border-radius : 4px;
color: #002f34;
display: block;
font-size: 16px;
height: 96px;
font-family : inherit;
box-sizing: border-box;
outline: none;
width : 50%;
resize: none;
&:focus{
    border: 3px solid teal; 
}`

export const Select = styled.select`
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
display: block;
font-size: 1em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 0px;
line-height: 5px;
&:focus{
    border: 3px solid teal; 
}`

export const Option = styled.option`
appearance: none;
background: none;
border: 1px solid rgba(0,47,52,.2);
color: #002f34;
display: block;
font-size: 0.8em;
height: 48px;
box-sizing: border-box;
border-radius : 4px;
outline: none;
width : 50%;
padding-left: 12px;
padding-right: 12px;
margin : 0px;
line-height: 5px;
&:focus{
    border: 3px solid teal; 
}
`
export const ImageWrapper = styled.div`
height : 150px;
width : 150px;
border-radius : 50%;`

export const PostButton = styled.button`
color: #fff;
background-color: #002f34;
border-radius: 4px;
border: 5px solid #002f34;
padding: 0 7px;
cursor : pointer;
font-size : 1em;
font-weight: 700;
line-height: 1.15;
height : 45px;
width : 100px;
&:hover{
    background-color : #fff;
    color : #002f34;
}
&:disabled{
   cursor: not-allowed;
   border : 1px solid #d8dfe0;
   color : #8d9799;
   background:#d8dfe0;
   margin-top: 40px;
}`

export const FileInput = styled.div`
border : 1px solid #9dadb6;
color: #9dadb6;
cursor: pointer;
width : 100px;
height : 100px;`

export const FileLabel = styled.label``

export const FileAlign = styled.div`
width : 60%;
height : 90vh;
display: grid;
grid-template: 100px / auto auto auto auto ;
gap: 10px 10px;
border-radius : 4px;`

export const indianStates = [
    "",
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman & Diu",
    "The Government of NCT of Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
]

export const Categories = [
    {
        title : "",
        subCategories:[]
    },
    {
        title : "OLX Autos (Cars)",
        subCategories : ['Cars', "SUVs", "MPVs"]
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