import React from "react";
import { ContainerDiv, SellButton, StyledLink } from './StyledElements'
export const LandingPage = () => {
    return  (
    <ContainerDiv>
        <SellButton>
            <StyledLink to = '/post'>+ SELL</StyledLink>
        </SellButton>
    </ContainerDiv>
    );
}