import React, { FC, useState } from "react";
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


  let [searchbar_content, content_update] = useState("");

  let [search_tags, update_tags] = useState([""]);

  const search_function:()=>void = () => {
    alert(searchbar_content);
  }

  const remove_tag = ():void => {

  }

  return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={pages}/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
          <SearchBar content_update={content_update} searchFunc={search_function} tags={search_tags} tag_update={update_tags}/>
          <div className='card-container'>
            <Card head='Classes' content='Lorem Ipsum' key='1'/>
            <Card head='Transfers' content='Lorem Ipsum' key='2'/>
            <Card head='Degrees' content='Lorem Ipsum' key='3'/>
          </div>
        </header>
      </div>
  )
}

export default HomePage;
