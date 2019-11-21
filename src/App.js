import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/home/Homepage";
import ShopAll from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndUp from "./pages/user-account/Sign-in&up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopAll} />
        <Route path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
