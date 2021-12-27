import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

//children comp
import Home from "./homePage/Home";
import SignIn from "./signInPage/SignIn";
import Profile from "./profilePage/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn" >
            <SignIn />
          </Route>
          <Route path="/profile/:id">
            <Profile/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
