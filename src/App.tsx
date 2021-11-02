import React from 'react';
import {useRoutes} from 'hookrouter';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import init from "./scripts/data-fetch"

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
};

function App() {
  // Do not include in production
  // TODO when complete, uncomment
  // init();

  const routeResult = useRoutes(routes);

  // replace "<div>Error 404: Page Not Found</div>" with a 404 page.
  return (
    <div>
      <div>{routeResult || <div>Error 404: Page Not Found</div>}</div>
    </div>
  );
}

export default App;