import React from 'react';
import logo from './logo.svg';
import Search from './Search/search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
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
