import React from 'react'
import {Link} from "react-router-dom"
import { RoutesNavbarWrapper } from './styles'
import {RiArrowDownSLine} from "react-icons/ri"

export const NavbarRoutes = () => {
    return (
        <RoutesNavbarWrapper>
            <div><span>ALL CATEGORIES <RiArrowDownSLine /> </span> </div>
            <div>
                <Link to = "/" ></Link>
                <Link to = "/cars" >Cars</Link>
                <Link to = "/motorcycles">Motorcycles</Link>
                <Link to = "/mobile" >Mobile Phones</Link>
                <Link to = "/saleHouse" >For Sale: Houses & Apartments</Link>
                <Link to = "/scooters"> Scooters</Link>
                <Link to = "/commerical">Commerical & Other Vehicles</Link>
                <Link to = "/rentHouse">For Rent: Houses & Apartments</Link>
            </div>        
        </RoutesNavbarWrapper>
    )
}
