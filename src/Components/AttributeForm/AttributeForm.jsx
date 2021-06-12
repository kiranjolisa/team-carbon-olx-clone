import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { MainDiv, Header, HeaderDiv, FormContainer, DetailsCategory, InputWrapper,
     Input, Label, FormSpan, TextArea, Select, Option, ImageWrapper, PostButton, 
     FileInput, FileAlign, FileLabel} from './AttributeFormStyles';
import { Categories,indianStates } from "./AttributeFormElements"
import avatar from '../../Assets/avatar.png'
import camera  from '../../Assets/camera.svg'

import { storage } from "../../Utils/Firebase/index"
import { postAd } from "../../Redux/PostData/action"
import { Redirect } from 'react-router';

const initState = {
    title :"",
    description : "",
    price : "",
    state : "",
    defaultName : "Masai School",
    imageUrls  : [],
    mainCategory : "",
    subCategory : "",
    featured : false
}
export const AttributeForm = () => {
    const mainCategoryReduxStore = useSelector(state => state.category.mainCategory);
    const [ form, setForm ] = useState({...initState, mainCategory : mainCategoryReduxStore});
    const [ imgLoc, setImgLoc ] = useState(new Array(20).fill(null));
    const [ index, setIndex ] = useState(0);
    const [ isUploading, setUploading ] = useState(false);
    const {title, description, price, state, defaultName, mainCategory, subCategory} = form;
    const dispatch = useDispatch();
    const postingAdSuccess = useSelector(state => state.postAd.postingAdSuccess)

    const handleChange = (e) => {
        console.log(mainCategoryReduxStore)
        const { name, value } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleImageUpdates = (e) => {
        setUploading(true)
        const updatedArray = imgLoc;
        const image = e.target.files[0];
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', 
        (snapshot)=> {
            console.log(snapshot)
        }, 
        (error) => {
            console.log(error)
            setUploading(false)
            alert('Image upload failed, please retry')},
        () => {
          storage.ref('images').child(image.name).getDownloadURL().then(url =>{
            setUploading(false);
            updatedArray[index] = url;
            setImgLoc(updatedArray)
            setIndex(prev => prev + 1)
            })
        })
    }

    const postAdToServer = () => {
        const onlyImageArray = imgLoc.filter(item => item === null ? false : true);
        const payload = {
            ...form,
            imageUrls : [...onlyImageArray],
            adPostDate : new Date().toLocaleDateString()
        }
        dispatch(postAd(payload))
    }

    return postingAdSuccess ?<Redirect to = '/post/success'/> :<>
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
                {Categories.map((item, i) => <Option key = {i}>{item.title}</Option>)}
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
                    return itemNext.subCategories.map((itemFinal, i) =><option key = {i}> {itemFinal} </option>)
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
            {isUploading?<FormSpan>UPLOADING IMAGE...</FormSpan>:null}
            <FileAlign>
                {imgLoc.map((item,i) => <FileLabel key = {i}><FileInput style = {{
                    backgroundImage :  `url(${item === null ?camera : item})`,
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
                {indianStates.map((item,i) => <Option key = {i}>{item}</Option>)}
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
                onClick = {() => postAdToServer()} 
                disabled = {
                    (subCategory.length === 0|| mainCategory.length === 0|| title.length === 0 || 
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