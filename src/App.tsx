import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  );
}

export default App;
