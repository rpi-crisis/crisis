import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SearchPage from './pages/list-search';
import TestInput from "./pages/TestInput";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/home">
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
      </Switch>
    </Router>
  );
}

export default App;
