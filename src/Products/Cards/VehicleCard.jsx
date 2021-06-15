import React from 'react'
import {FiHeart} from "react-icons/fi"
import { useDispatch } from 'react-redux'
import {CardLinkWrap, CardWrapper} from "../../Components/styles"
import { addWhishlist } from '../../Redux/Wishlist/action'

export const VehicleCard = ({image, price, year, distance, address, postDate, brand, model, category, id }) => {
    const dispatch = useDispatch();

    const addToWishlist = (e) => {
        //e.cancelBubble = true;
        console.log('updating wishlist');
        e.stopPropagation();
        const payload = {category : category, id : id}
        dispatch(addWhishlist(payload));
    }

    return (
            <CardWrapper>
                <CardLinkWrap to = {`/item/${category}/${id}`}>
                <div>
                    <div></div>
                    <img src= {image} alt= {image} />
                    <div></div>
                    <button onClick = {addToWishlist}><FiHeart/></button>
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
                </CardLinkWrap>    
            </CardWrapper>
    )
}
