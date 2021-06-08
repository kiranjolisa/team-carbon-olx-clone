import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { PostAd } from "../Components/PostAd/PostAd";

const Routes = () => {
    return <Switch>
        <Route exact path = '/'>
          <LandingPage />
        </Route>
        <Route path = '/post'>
            <PostAd />
        </Route>
        <Route>
            <h1>Unknown Route, 404</h1>
        </Route>
    </Switch>
}
export default Routes
