import React from 'react'
import { FreshRecommendation } from '../Products/FreshRecommendation'
// import {HomeCarousel} from "./HomeCarousel"
import homepageBackground from "../Assets/homepageBackground.jpg"
export const Home = () => {

    return (
        <div>
            <img width = "100%" src= {homepageBackground} alt="" />
            {/* <HomeCarousel/> */}
            <FreshRecommendation/>
           
        </div>
    )
}
