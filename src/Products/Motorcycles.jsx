import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getMotorcyclesData} from "../Redux/products/action"
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"

export const Motorcycles = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)

    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getMotorcyclesData())
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div>
            {products.map((item) => {
                return <VehicleCard {...item} />
            })}
        </div>
    )
}
