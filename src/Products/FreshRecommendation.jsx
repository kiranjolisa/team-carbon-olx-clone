import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getFreshRecommendationData } from '../Redux/products/action'
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { LoadMoreButton } from '../Components/LoadMoreButton'

export const FreshRecommendation = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)
    const [visible, setVisible] = React.useState(10)

    React.useEffect(() => {
        showData()
    }, [])
    
    const showData = () => {
        dispatch(getFreshRecommendationData())
    }
    
    const showMoreItems = () => {
        setVisible((prev) => prev + 10)
    }

    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div> 
            <h2>Fresh recommendations</h2>
            <div style={{border: "2px solid red", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
                {products.slice(0, visible).map((item) => {
                    return <VehicleCard {...item} />
                })}
            </div>
            <LoadMoreButton showMoreItems = {showMoreItems}  />
        </div>
    )
}
