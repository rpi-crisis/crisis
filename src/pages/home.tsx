import React, { FC } from "react";
import logo from '../res/images/kool-aid_cat.png';
import './home.css';

import NavBar from '../navbar/navbar';
import SearchBar from '../search/search';

const HomePage: FC = () => {

  let pages: {text:string, path:string, active:boolean, external?:string}[] = [
    {
      text:"Home",
      path:"/",
      active:true,
    },
    {
      text:"About",
      path:"/about",
      active:false,
    },
    {
      text:"GitHub",
      path:"/",
      active:false,
      external:"https://github.com/rpi-crisis/crisis"
    },
  ]

  return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={pages}/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
          <SearchBar />
          <p className="home-text">
            This site is still in development. Check out or contribute to our GitHub to see the progress!
          </p>
        </header>
      </div>
  )
}

export default HomePage;
