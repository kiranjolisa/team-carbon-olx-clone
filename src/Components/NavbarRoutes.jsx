import React from 'react'
import {Link} from "react-router-dom"
import { RoutesNavbarWrapper } from './styles'
import {RiArrowDownSLine} from "react-icons/ri"

import { wordHashes } from "../Utils/BilingualData"
import { useSelector } from 'react-redux'

export const NavbarRoutes = () => {
    const language = useSelector((state) => state.language.lang);

    return (
        <RoutesNavbarWrapper>
            <div><span>{wordHashes.allCategories[language]}<RiArrowDownSLine /> </span> </div>
            <div>
                <Link to = "/" ></Link>
                <Link to = "/cars" >{wordHashes.cars[language]}</Link>
                <Link to = "/motorcycles">{wordHashes.motorcycles[language]}</Link>
                <Link to = "/mobile" >{wordHashes.mobilePhones[language]}</Link>
                <Link to = "/saleHouse" >{wordHashes.saleHousesAndApartments[language]}</Link>
                <Link to = "/scooters">{wordHashes.scooters[language]}</Link>
                <Link to = "/commerical">{wordHashes.comercialAndOtherVehicles[language]}</Link>
                <Link to = "/rentHouse">{wordHashes.rentHousesAndApartments[language]}</Link>
            </div>        
        </RoutesNavbarWrapper>
    )
}
