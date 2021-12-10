import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
//import TestSearch from "./pages/test-search";
import init, { getJsonData } from "./scripts/data-fetch"

import CoursesContext from "./context/data-context";

let fetched: boolean = false;

function App() {

  init();

  const [ courses, setCourses ] = useState([]);

  if(courses.length === 0){
    console.log("getting..")
    fetched = true;
    getJsonData()
      .then(res => {
        console.log(courses)
        setCourses(res);
        console.log(courses);
        }
      );
  } else {
    console.log(courses.length)
  }

  return (
    <CoursesContext.Provider value={{
      courses: courses,
      setCourses: setCourses
    }}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route render={() => <h1>Error 404: Page not found</h1>} />
        </Switch>
      </Router>
    </CoursesContext.Provider>
  );
}

//<Route path="/search" component={TestSearch} />

export default App;
