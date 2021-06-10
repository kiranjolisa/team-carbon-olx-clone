import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getScootersData} from "../Redux/products/action"
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"

export const Scooters = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)

    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getScootersData())
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
