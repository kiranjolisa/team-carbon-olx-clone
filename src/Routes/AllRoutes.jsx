import React from 'react'
import { Route, Switch } from 'react-router'
import {Cars} from "../Products/Cars"
import {Motorcycles} from "../Products/Motorcycles"
import {Mobilephones} from "../Products/Mobilephones"
import {Scooters} from "../Products/Scooters"
import {Commerical} from "../Products/Commerical"
import {HouseForRent} from "../Products/HouseForRent"
import { HouseForSale } from '../Products/HouseForSale'
import { NavbarRoutes } from '../Components/NavbarRoutes'
import { Footer } from '../Components/Footer'

export const AllRoutes = () => {
    return (
        <div>
            <NavbarRoutes/>
            <Switch>
                <Route path = "/cars">
                    <Cars/>
                </Route>
                <Route path = "/motorcycles">
                    <Motorcycles/>
                </Route>
                <Route path = "/mobile">
                    <Mobilephones/>
                </Route>
                <Route path = "/saleHouse">
                    <HouseForSale/>
                </Route>
                <Route path = "/scooters">
                    <Scooters/>
                </Route>
                <Route path = "/commerical">
                    <Commerical/>
                </Route>
                <Route path = "/rentHouse">
                    <HouseForRent/>
                </Route>
                <Route>
                    <h3>something went wrong</h3>
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}
