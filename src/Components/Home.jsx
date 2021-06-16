import React from 'react'
import { FreshRecommendation } from '../Products/FreshRecommendation'
import homepageBackground from "../Assets/homepageBackground.jpg"
import { AdImage } from "./styles"
export const Home = () => {

    const shiftToMasai = () => {
        window.location = 'https://masaischool.com/'
    }
    return (
        <div>
            <img width = "100%" src= {homepageBackground} alt="bakcground" />
            {/* <div onClick = {shiftToMasai}><AdImage src = 'https://i.ytimg.com/vi/UncxDjXXc4g/maxresdefault.jpg' alt = "Masai ad" /></div> */}
            <FreshRecommendation/>
           
        </div>
    )
}
