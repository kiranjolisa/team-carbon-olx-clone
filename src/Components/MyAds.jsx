import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"
import {FiHeart} from "react-icons/fi"
import {CardWrapper} from "./styles"


export const MyAds = () => {
    const postedAds = useSelector(state => state.postAd.postedAds)
    return (
        <div>
        <AdsWrapper>
           <Link to = "/myAds" >ADS</Link>
           <Link to = "/favourites">FAVOURITES</Link>
        </AdsWrapper>
        {postedAds.length !== 0 && postedAds.map(item => <div>
            <CardWrapper>
                <div>
                    <div></div>
                    <img src= {item.imageUrls[0]} alt= "ads" />
                    <div></div>
                    <button><FiHeart/></button>
                </div>
                <div>
                    <p> ₹ {item.price}</p>
                    <p> {item.description} </p>
                </div>
                <div>
                    {/* <p>{address}</p> */}
                    <p> {item.adPostDate}</p>
                </div>     
            </CardWrapper>
        </div>
        )}
        </div>
    
    )
}

{/* <img src = {item.imageUrls[0]} alt = "ad" />
            <h4>{item.price}</h4>
            <h4>{item.adPostDate}</h4>
            <h1>{item.title}</h1> */}