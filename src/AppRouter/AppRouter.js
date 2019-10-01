import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components

import Home from "../screen/HomeComponent/home"
import Food from "../screen/Food/Food"
import Grocery from "../screen/Grocery/Grocery"
import Fashion from "../screen/Fashion/Fashion"
import Services from "../screen/Services/Services"
import CartCard from '../component/PopupCards/cartCard'
import OpenAShop from '../screen/OpenAShop/OpenAShop'
// import AccessoriesPage from "../screen/Accessories/accessoryPage";
// import FaceAndBodyPage from "../screen/FaceAndBody/faceAndBodyPage";

const AppRouter = (props) => {
  var {isAuthenticated, userInfo} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"  render={() => <Home isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/food" render={() => <Food isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/grocery" render={() => <Grocery isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/fashion" render={() => <Fashion isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/services" render={() => <Services isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        {/* <Route path="/face & body" component={FaceAndBodyPage} exact /> */}
        {/* <Route path="/checkout" component={CheckOut} exact /> */}
        <Route path="/openShop" render={() => <OpenAShop isAuthenticated={isAuthenticated} userInfo={userInfo} />} exact />
        <Route path="/cart" component={CartCard} exact />
      </Switch>
    </BrowserRouter>
  );

};

export default AppRouter;
