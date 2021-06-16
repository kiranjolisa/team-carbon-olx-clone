import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getSalesHouseData} from "../Redux/products/action"
import {LoadingIndicator} from "../Components/LoadingIndicator"
import { HouseCard } from './Cards/HouseCard'
import { LoadMoreButton } from '../Components/LoadMoreButton'
import FilterForSale from "../Components/FilterForSale";

export const HouseForSale = () => {
    const dispatch = useDispatch()
    const {products, isLoading} = useSelector(state => state.products, shallowEqual)
    const [visible, setVisible] = React.useState(10)
    
    React.useEffect(() => {
        showData()
    }, [dispatch])
    
    const showData = () => {
        dispatch(getSalesHouseData())
    }
    
    const showMoreItems = () => {
        setVisible((prev) => prev + 10)
    }
    
    return isLoading ? (
        <LoadingIndicator/>
    ) : (
        <>
        <div style={{display: "flex", justifyContent: "space-around", width: "90%", margin: "auto", marginTop: "3%"}}>
        <div style={{flexBasis: "35%"}}><FilterForSale/></div>
        <div style={{border: "2px solid white", display: 'flex', flexWrap: "wrap", justifyContent: "space-around"}}>
            {products.slice(0, visible).map((item) => {
                return <HouseCard key = {item.id} {...item} />
            })}
        </div>
    </div>
    <LoadMoreButton showMoreItems = {showMoreItems}  />
    </>
    )
}
