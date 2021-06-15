import styled from "styled-components";

export const ChatContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #FFFFFF;
border: 1px solid rgba(0,47,52,.2);
border-radius: 4px;
height: 80vh;
width: 55vw;
margin : auto;
@media (min-width: 320px) and (max-width: 480px) {
      width: 100%;
      height: 100%;
  };
  
  @media (min-width: 480px) and (max-width: 1200px) {
      width: 60%;
  }`