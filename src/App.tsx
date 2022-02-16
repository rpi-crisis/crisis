import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
//import TestSearch from "./pages/test-search";
import init from "./scripts/data-fetch";

function App() {
  init();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
      </Routes>
    </Router>
  );
}
//<Route path="/search" component={TestSearch} />
export default App;
