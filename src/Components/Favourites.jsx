import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"

export const Favourites = () => {
    const wishlist = useSelector(state => state.wishlist.wishlist)
    console.log(wishlist)
    return (
        <div>
            <AdsWrapper>
                <Link to = "/myAds" >ADS</Link>
                <Link to = "/favourites">FAVOURITES</Link>
            </AdsWrapper>
        </div>
    )
}
