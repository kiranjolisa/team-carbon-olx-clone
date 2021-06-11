import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getRentHouseData} from "../Redux/products/action"
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { HouseCard } from './Cards/HouseCard'
import { LoadMoreButton } from '../Components/LoadMoreButton'

export const HouseForRent = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)
    const [visible, setVisible] = React.useState(10)
    
    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getRentHouseData())
    }
    
    const showMoreItems = () => {
        setVisible((prev) => prev + 10)
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <div>
        <div style={{border: "2px solid red", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
            {products.slice(0, visible).map((item) => {
                return <HouseCard {...item} />
            })}
        </div>
        <LoadMoreButton showMoreItems = {showMoreItems}  />
    </div>
    )
}
