import React from 'react'
import {FiHeart} from "react-icons/fi"
import {VehicleCardWrapper} from "../../Components/styles"
import {Wrapper} from "../../Components/styles"
export const VehicleCard = ({image, price, year, distance, address, postDate, brand, model }) => {


    return (
        <Wrapper>
            <VehicleCardWrapper>
                <div>
                    <img src= {image} alt= {image} />
                    <button><FiHeart/></button>
                </div>
                <div>
                    <p> ₹ {price}</p>
                    <p> {year} - {distance} km </p>
                    <p> {brand} {model} {year}  </p>
                </div>
                <div>
                    <p>{address}</p>
                    <p> {postDate}</p>
                </div>       
            </VehicleCardWrapper>
        </Wrapper>
    )
}
