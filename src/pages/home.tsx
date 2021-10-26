import React, { FC } from "react";
import logo from '../res/images/kool-aid_cat.png';
import './home.css';

import NavBar from '../navbar/navbar';
import SearchBar from '../search/search';
import Card from '../card/card';

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
          <div className='card-container'>
            <Card head='Classes'/>
            <Card head='Transfers'/>
            <Card head='Degrees'/>
          </div>
        </header>
      </div>
  )
}

export default HomePage;
