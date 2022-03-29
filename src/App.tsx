import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ClassesPage from "./pages/classes/classes";
import { useAppDispatch, useAppSelector } from "./store";
import { CHECK_VERSION } from "./store/slices/courses";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CHECK_VERSION());
  }, []);

  const settings = useAppSelector(state => state.settings);

  if(document.documentElement.getAttribute("data-theme") as string !== settings.theme) {
    document.documentElement.setAttribute("data-theme", settings.theme);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/class" element={<ClassesPage />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
