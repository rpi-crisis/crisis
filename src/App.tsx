import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import TestInput from "./pages/test-input";
import init, { getJsonData } from "./scripts/data-fetch"

function App() {
  init();
  const [courses_json, updateData] = useState([]);
  getJsonData().then((res) => {
    updateData(res);
  })

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