import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import {AdsWrapper} from "./styles"
import {FiHeart} from "react-icons/fi"
import {PostCardWrapper} from "./styles"


export const MyAds = () => {
    const postedAds = useSelector(state => state.postAd.postedAds)
    return (
        <div>
        <AdsWrapper>
           <Link to = "/myAds" >ADS</Link>
           <Link to = "/favourites">FAVOURITES</Link>
        </AdsWrapper>
        {postedAds.length !== 0 && postedAds.map(item => <div>
            <PostCardWrapper>
                <div>
                    <img src= {item.imageUrls[0]} alt= "ads" />
                    <button><FiHeart/></button>
                </div>
                <div>
                    <p> ₹ {item.price}</p>
                </div>
                <div>
                    <p> {item.description} </p>
                    <p>{item.subCategory}</p>
                </div>
                <div>
                    <p>{item.state}</p>
                    <p> {item.adPostDate}</p>
                </div>     
            </PostCardWrapper>
        </div>
        )}
        </div>
    
    )
}