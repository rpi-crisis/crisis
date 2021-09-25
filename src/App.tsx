import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the template for a node-react-ts project. You can edit <code>src/App.tsx</code> and save to reload the page.
          <br/>
          See the installation guide in the repo for information on how to set up the project for development on your system.
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
  );
}

export default App;
