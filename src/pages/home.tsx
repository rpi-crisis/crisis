import React, { FC } from "react";
import {Link} from "react-router-dom";
import logo from '../res/images/logo.svg';
import '../App.css';
import './home.css';

const HomePage: FC = () => {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
          <p className="home-text">
            This site is still in development. Check out or contribute to our GitHub to see the progress!
          </p>
          <Link
            className="App-link"
            to="/about" >
            About
          </Link>
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
  )
}

export default HomePage;