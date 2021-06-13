import React from 'react'
import {FiHeart} from "react-icons/fi"
import {CardWrapper} from "../../Components/styles"

export const VehicleCard = ({image, price, year, distance, address, postDate, brand, model }) => {


    return (
            <CardWrapper>
                <div>
                    <div></div>
                    <img src= {image} alt= {image} />
                    <div></div>
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
            </CardWrapper>
    )
}
