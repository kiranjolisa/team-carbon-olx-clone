import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getSalesHouseData} from "../Redux/products/action"
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { HouseCard } from './Cards/HouseCard'

export const HouseForSale = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)

    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getSalesHouseData())
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div>
            {products.map((item) => {
                return <HouseCard {...item} />
            })}
        </div>
    )
}
