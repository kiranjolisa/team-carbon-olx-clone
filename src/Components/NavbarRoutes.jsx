import React from 'react'
import {Link} from "react-router-dom"
import {RiArrowDownSLine} from "react-icons/ri"
import { useSelector } from 'react-redux'

import { RoutesNavbarWrapper } from './styles'
import { wordHashes } from "../Utils/BilingualData"

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
