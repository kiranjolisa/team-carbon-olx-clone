import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../App.css';
import { Cars } from "../Products/Cars"
import { Motorcycles } from "../Products/Motorcycles"
import { Mobilephones } from "../Products/Mobilephones"
import { Scooters } from "../Products/Scooters"
import { Commerical } from "../Products/Commerical"
import { HouseForRent } from "../Products/HouseForRent"
import { HouseForSale } from '../Products/HouseForSale'
import { NavbarRoutes } from '../Components/NavbarRoutes'
import { Footer } from '../Components/Footer'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar';
import { PostAd } from "../Components/PostAd/PostAd";
import { PostSuccess } from "../Components/PostAdSuccess/PostSuccess";
import { AttributeForm } from "../Components/AttributeForm/AttributeForm";
import { ScrollToTop } from "../Components/ScrollToTop"
import { MyAds } from "../Components/MyAds"
import { Favourites } from '../Components/Favourites';
import { DynamicCardContents } from '../Components/DynamicCardContents/DynamicCardContents';
import { Chat } from "../Components/Chat/Chat";


export const AllRoutes = () => {

    const isAuth = useSelector(state => state.userAuthentication.auth)


    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Home />
                        <Footer />
                    </div>
                </Route>
                <Route path="/cars">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Cars />
                        <Footer />
                    </div>
                </Route>
                <Route path="/motorcycles">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Motorcycles />
                        <Footer />
                    </div>
                </Route>
                <Route path="/mobile">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Mobilephones />
                        <Footer />
                    </div>
                </Route>
                <Route path="/saleHouse">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <HouseForSale />
                        <Footer />
                    </div>
                </Route>
                <Route path="/scooters">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Scooters />
                        <Footer />
                    </div>
                </Route>
                <Route path="/commerical">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Commerical />
                        <Footer />
                    </div>
                </Route>
                <Route path="/rentHouse">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <HouseForRent />
                        <Footer /></div>
                </Route>
                <Route exact path='/post'>
                    {isAuth ? <PostAd /> : <Redirect to="/" />}
                </Route>
                <Route exact path='/post/attributes'>
                    <AttributeForm />
                </Route>
                <Route exact path='/post/success'>
                    <PostSuccess />
                </Route>
                <Route path='/item/:category/:id'>
                    <DynamicCardContents />
                </Route>
                <Route path="/myAds">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <MyAds />
                        <Footer /></div>
                </Route>
                <Route path="/favourites">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Favourites />
                        <Footer /></div>
                </Route>
                <Route path="/chat">
                    <div className="App">
                        <Navbar />
                        <NavbarRoutes />
                        <Chat />
                        {/* { isAuth ? <Chat  /> : <Redirect to = "/" /> } */}
                        <Footer /></div>
                </Route>
                <Route>
                    <h3>something went wrong</h3>
                </Route>
            </Switch>
            <ScrollToTop />
        </>
    )
}
