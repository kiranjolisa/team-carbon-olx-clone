import styled from "styled-components";
export const FormDiv = styled.form`
display: flex;
border-top: 2px solid #D3D3D3;
`

  
 export const InputField = styled.input`
    border: none;
    border-radius: 0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
    &:focus{
        outline: none;
    }`
  
//   input:focus, textarea:focus, select:focus{
    
//   }
  
export const SendButton = styled.button`
    color: #002f34 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ebeeef;
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;
    &:hover{
        cursor: pointer;
        background: #002f34;
        color: #ebeeef !important;
      }`
