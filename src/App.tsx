import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SearchPage from './pages/list-search';
import TestInput from "./pages/test-input";
import DesignTest from "./pages/design-test";
import init from "./scripts/data-fetch"

function App() {
  init();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/input">
          <TestInput />
        </Route>
        <Route path="/design">
          <DesignTest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
