import React, { FC, ReactElement, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import GlobalStyles from "./components/styles/GlobalStyles";
import MenuContent from "./pages/MenuContentPage";
import SearchLocation from "./pages/SearchLocationPage";
import { dataStore } from "./store/dataStore";

const App = (): ReactElement => {
  useEffect(() => {
    dataStore.init();
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <MenuContent />
          </Route>
          <Route path="/search-location">
            <SearchLocation />
          </Route>
          <Route
            path="/where-to-test-covid-19"
            component={() => {
              window.location.href = "https://wheretotestcovid19.com/";
              return null;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
