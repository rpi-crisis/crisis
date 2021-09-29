import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route    path="/home">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
