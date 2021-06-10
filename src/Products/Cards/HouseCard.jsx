import React from 'react'
import {FiHeart} from "react-icons/fi"
import {CardWrapper} from "../../Components/styles"
import {Wrapper} from "../../Components/styles"

export const HouseCard = ({image, price, address, postDate, bedrooms, bathrooms, carParking}) => {
    return (
        // <Wrapper>
            <CardWrapper>
                <div>
                    <div></div>
                    <img src= {image} alt= {image} />
                    <div></div>
                    <button><FiHeart/></button>
                </div>
                <div>
                    <p> ₹ {price}</p>
                    <p> {bedrooms} Bds - {bathrooms} Ba </p>
                    <p> {bedrooms}BHK {carParking} Car Parking </p>
                </div>
                <div>
                    <p>{address}</p>
                    <p> {postDate}</p>
                </div>       
            </CardWrapper>
        // </Wrapper>
    )
}
