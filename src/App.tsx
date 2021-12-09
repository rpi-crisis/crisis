import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import TestSearch from "./pages/test-search";
import init from "./scripts/data-fetch"

function App() {
  init();

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/search" component={TestSearch} />
        <Route render={() => <h1>Error 404: Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;