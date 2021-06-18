import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getFreshRecommendationData } from '../Redux/products/action'
import { VehicleCard } from './Cards/VehicleCard'
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { LoadMoreButton } from '../Components/LoadMoreButton'

export const FreshRecommendation = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)
    const [visible, setVisible] = React.useState(12)

    React.useEffect(() => {
        showData()
    }, [])
    
    const showData = () => {
        dispatch(getFreshRecommendationData())
    }
    
    const showMoreItems = () => {
        setVisible((prev) => prev + 13)
    }

    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div> 
            <h2 style = {{textAlign : "left", marginLeft: "10.4%", color: "#002F34", fontWeight: "100" }} >Fresh recommendations</h2>
            <div style={{border: "2px solid white", display: 'flex', flexWrap: "wrap", justifyContent: "space-around", marginRight: "9%", marginLeft: "9%"}}>
                {products.slice(0, visible).map((item) => {
                    return <VehicleCard key = {item.id} {...item} />
                })}
            </div>
            <LoadMoreButton showMoreItems = {showMoreItems}  />
        </div>
    )
}
