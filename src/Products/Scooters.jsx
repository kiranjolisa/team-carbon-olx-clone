import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getScootersData} from "../Redux/products/action"
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { LoadMoreButton } from '../Components/LoadMoreButton'
import FilterScooters from "../Components/FilterScooters";

export const Scooters = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)
    const [visible, setVisible] = React.useState(10)
    
    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getScootersData())
    }
    
    const showMoreItems = () => {
        setVisible((prev) => prev + 10)
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <>
        <div style={{display: "flex", justifyContent: "space-around", width: "90%", margin: "auto"}}>
        <div style={{flexBasis: "35%"}}><FilterScooters/></div>
        <div style={{border: "2px solid white", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
            {products.slice(0, visible).map((item) => {
                return <VehicleCard {...item} />
            })}
        </div>
    </div>
    <LoadMoreButton showMoreItems = {showMoreItems}  />
    </>
    )
}
