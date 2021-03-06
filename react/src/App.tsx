import React, { useEffect } from "react";
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
import SearchLocationDetail from "./pages/SearchLocationDetailPage";
import { dataStore } from "./store/dataStore";
import SelfAssessment from "./pages/SelfAssessmentPage";

const App = () => {
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
          <Route exact path="/search-location/:locationCode">
            <SearchLocationDetail />
          </Route>
          <Route
            path="/where-to-test-covid-19"
            component={() => {
              window.location.href = "https://wheretotestcovid19.com/";
              return null;
            }}
          />
          <Route exact path="/self-assessment">
            <SelfAssessment />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
