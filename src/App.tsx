import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ClassesPage from "./pages/classes/classes";
import init from "./scripts/data-fetch";
import { useAppDispatch } from "./store";
import { CHECK_VERSION } from "./store/slices/courses";

function App() {
  const dispatch = useAppDispatch();
  dispatch(CHECK_VERSION());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
