import React, { FC, useState } from "react";
import logo from '../../res/images/kool-aid_cat.png';
import './home.css';

import NavBar from '../../components/navbar/navbar';
import SearchBar from '../../components/search/search';

import Pages from '../pageList'

const HomePage: FC = () => {


  let [searchbar_content, content_update] = useState("");
  let [search_tags, update_tags] = useState<string[]>([]);

  const search_function:()=>void = () => {
    alert(searchbar_content);
  }

  return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Home")}/>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
          <SearchBar content_update={content_update} searchFunc={search_function} tags={search_tags} tag_update={update_tags}/>
        </header>
      </div>
  )
}

export default HomePage;
