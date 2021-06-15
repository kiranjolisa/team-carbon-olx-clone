import React from 'react'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"

export const MyAds = () => {

    return (
        <AdsWrapper>
           <Link to = "/myAds" >ADS</Link>
           <Link to = "/favourites">FAVOURITES</Link>
        </AdsWrapper>
    )
}
