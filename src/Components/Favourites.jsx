import React from 'react'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"

export const Favourites = () => {
    return (
        <div>
            <AdsWrapper>
                <Link to = "/myAds" >ADS</Link>
                <Link to = "/favourites">FAVOURITES</Link>
            </AdsWrapper>
        </div>
    )
}
