import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import TestInput from "./pages/test-input";
import init from "./scripts/data-fetch"

function App() {
  init();

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/search" component={TestInput} />
        <Route render={() => <h1>Error 404: Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;