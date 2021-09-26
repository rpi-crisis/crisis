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
        <Route path="/rpi-tools/RTools">
          <HomePage />
        </Route>
        <Route path="/rpi-tools/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
