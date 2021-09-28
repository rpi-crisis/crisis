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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
        <p>
          This site is still in development. Check out or contribute to our GitHub to see the progress!
        </p>
        <a
          className="App-link"
          href="https://github.com/rpi-crisis/crisis"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </header>
    </div>
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
