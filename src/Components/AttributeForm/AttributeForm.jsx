
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { indianStates ,MainDiv, Header, HeaderDiv, FormContainer, DetailsCategory, InputWrapper, Input, Label, FormSpan, TextArea, Select, Option, ImageWrapper, PostButton, FileInput, FileAlign, FileLabel, Categories } from './AttributeFormStyles';
import { useState } from 'react';
import avatar from '../../Assets/avatar.png'
import camera  from '../../Assets/camera.svg'
import { useSelector } from 'react-redux';

const initState = {
    title :"",
    description : "",
    price : "",
    state : "",
    defaultName : "Masai School",
    imageUrls  : [],
    mainCategory : "",
    subCategory : ""
}
export const AttributeForm = () => {
    const [ form, setForm ] = useState(initState);
    const [ imgLoc, setImgLoc ] = useState(new Array(20).fill(null));
    const [ index, setIndex ] = useState(0)
    const mainCategoryReduxStore = useSelector(state => state.category.mainCategory);
    const {title, description, price, state, defaultName, mainCategory, subCategory} = form;

    const handleChange = (e) => {
        console.log(mainCategoryReduxStore)
        const { name, value } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleImageUpdates = (e) => {
        const updatedArray = imgLoc;
        updatedArray[index] = e.target.files[0]
        setImgLoc(updatedArray)
        setIndex(prev => prev + 1)
    }
    return<>
    <Navbar/>
    <MainDiv>
    <Header>POST YOUR AD</Header>
        <FormContainer>
        <DetailsCategory>
            <HeaderDiv>
            <Header>CHOOSE CATEGORY</Header>
            </HeaderDiv>
            <InputWrapper>
            <Label>
                Main Category *
            </Label>
            <Select 
            name = "mainCategory"
            value = {mainCategory} 
            onChange = {handleChange} >
                {Categories.map((item) => <Option>{item.title}</Option>)}
            </Select>
            </InputWrapper>
            <InputWrapper>
            <Label>
                Sub Category *
            </Label>
            <Select 
            name = "subCategory"
            value = {subCategory} 
            onChange = {handleChange} >
                {Categories.filter(item => item.title === mainCategory? true : false).map(itemNext => {
                    return itemNext.subCategories.map(itemFinal =><option> {itemFinal} </option>)
                })}
            </Select>
            </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
            <HeaderDiv>
            <Header>INCLUDE SOME DETAILS</Header>
            </HeaderDiv>
                <InputWrapper>
                <Label>
                    Ad title *
                </Label>
                <Input 
                type = "text" 
                name = "title"
                value = {title} 
                onChange = {handleChange}  
                autoComplete="off" 
                maxLength="70"/>
                <FormSpan>Mention the key features of your item (e.g. brand, model, age, type) 
                    &emsp;&ensp; {title.length}/70</FormSpan> 
                </InputWrapper>
                <InputWrapper>
                <Label>
                    Descripition *
                </Label>
                <TextArea 
                onChange = {handleChange} 
                value = {description} 
                name = "description"
                autoComplete="off" 
                maxLength="4096"></TextArea>
                <FormSpan>Include condition, features and reason for selling
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp; {description.length}/4096</FormSpan> 
                </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
            <HeaderDiv>
            <Header>SET A PRICE</Header>
            </HeaderDiv>
            <InputWrapper>
            <Label>
                Price *
            </Label>
            <Input 
                type = "number" 
                name = "price"
                value = {price} 
                onChange = {handleChange}  
                autoComplete="off" 
                placeholder = "&#8377;"
                />
            </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
            <HeaderDiv>
            <Header>UPLOAD UP TO 20 PHOTOS</Header>
            </HeaderDiv>
            <InputWrapper>
            <FileAlign>
                {imgLoc.map((item,i) => <FileLabel><FileInput style = {{
                    backgroundImage :  `url(${item === null ?camera : URL.createObjectURL(item)})`,
                    backgroundRepeat : 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "80px 80px"
                }}>
                <input type="file" onChange = {handleImageUpdates}/>
                </FileInput>
                </FileLabel>)}
            </FileAlign>
            </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
            <HeaderDiv>
            <Header>CONFIRM YOUR LOCATION</Header>
            </HeaderDiv>
            <InputWrapper>
            <Label>
                State *
            </Label>
            <Select 
            name = "state"
            value = {state} 
            onChange = {handleChange} >
                {indianStates.map(item => <Option>{item}</Option>)}
            </Select>
            </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
            <HeaderDiv>
            <Header>REVIEW YOUR DETAILS</Header>
            </HeaderDiv>
            <InputWrapper>
            <ImageWrapper>
                <img  height = "150px" width = "150px" src = {avatar} alt = 'avatar'/>
            </ImageWrapper>
            <Label>
                Name *
            </Label>
            <Input 
                type = "text" 
                name = "defaultName"
                value = {defaultName} 
                onChange = {handleChange}  
                autoComplete="off" 
                maxLength = "30"
                />
                <FormSpan>
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
            &emsp; &emsp; {defaultName.length}/30</FormSpan>
            <p>Your phone number is &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; +911234567890</p>
            </InputWrapper>
            </DetailsCategory>
            <DetailsCategory>
                <InputWrapper>
                <PostButton 
                disabled = {
                    (
                       subCategory.length === 0|| mainCategory.length === 0|| title.length === 0 || 
                       description.length === 0 ||price.length === 0 || state.length === 0) ? true : false 
                }
                >Post now</PostButton>
                </InputWrapper>
            </DetailsCategory>
        </FormContainer>
    </MainDiv>
    <Footer/>
     </>
}