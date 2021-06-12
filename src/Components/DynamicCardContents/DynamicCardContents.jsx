import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDynamicData } from "../../Redux/GetDynamicData/action";
import { NavbarRoutes } from '../NavbarRoutes'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar';

export const DynamicCardContents = () => {
    const { category, id} = useParams()
    const dispatch = useDispatch()
    const content = useSelector(state => state.dynamicContent.dynamicData)
    
    useEffect(() => {
        dispatch(getDynamicData({category, id}))
    }, [dispatch, category, id])
    console.log(content.length === 0 ? " " : content[0])
    return <>
     <Navbar/>
    <NavbarRoutes />           
    <h1>Dynamic Contents Fetched!</h1>
    <h3>{content.length === 0 ? null:content[0].category}</h3>
    <h3>{content.length === 0 ? null:content[0].id}</h3>
    <h3>{content.length === 0 ? null:content[0].description}</h3>
    <Footer />
    </>
}