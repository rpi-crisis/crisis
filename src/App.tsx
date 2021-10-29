import React from 'react';
import {A, useRoutes} from 'hookrouter';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SearchPage from './pages/list-search';
import TestInput from "./pages/test-input";
import init from "./scripts/data-fetch"
import {BrowserRouter} from "react-router-dom";

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  '/search': () => <SearchPage />,
  '/input/:argument': () => <TestInput />
};

function App() {
  init();

  const routeResult = useRoutes(routes);

  // replace "<div>Not Found</div>" with a 404 page.
  return (
    <div>
      <A
        className="App-link"
        href="/about">
        About
      </A>
      <div>{routeResult || <div>Not Found</div>}</div>
    </div>
  );
}

export default App;