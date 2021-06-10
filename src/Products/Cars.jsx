import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getCarsData} from "../Redux/products/action"
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"

export const Cars = () => {

    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)

    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getCarsData())
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div style={{border: "2px solid red", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
            {products.map((item) => {
                return <VehicleCard {...item} />
            })}
        </div>
    )
}
