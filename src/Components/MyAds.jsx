import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"

export const MyAds = () => {
    const postedAds = useSelector(state => state.postAd.postedAds)
    return (
        <div>
        <AdsWrapper>
           <Link to = "/myAds" >ADS</Link>
           <Link to = "/favourites">FAVOURITES</Link>
        </AdsWrapper>
        {postedAds.length !== 0 && postedAds.map(item => <div>
            <img src = {item.imageUrls[0]} alt = "ad" />
            <h4>{item.price}</h4>
            <h4>{item.adPostDate}</h4>
            <h1>{item.title}</h1></div>)}
        </div>
    
    )
}
