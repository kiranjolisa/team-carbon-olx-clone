import React from 'react'
import {Carousel} from "./styles"
import { useSelector } from 'react-redux'
import { VehicleCard } from '../Products/Cards/VehicleCard'

export const HomeCarousel = () => {

    const {products} = useSelector((state) => state.products)

    return (
        <div>
            <Carousel>
                {products.map((item) => {
                    return <VehicleCard {...item}/>
                })}
                
            </Carousel>
        </div>
    )
}
