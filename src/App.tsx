import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';

function App() {
  // TODO when complete, uncomment // init();

  const routeResult = useRoutes(routes);

  // replace "<div>Error 404: Page Not Found</div>" with a 404 page.
  return (
    <div>
      <div>{routeResult || <div>Error 404: Page Not Found</div>}</div>
    </div>
  );
}

