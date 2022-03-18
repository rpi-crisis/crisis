import React, { FC, useState, useEffect } from "react";
//import logo from '../../res/images/kool-aid_cat.png';
import "./classes.css";

import { getJsonData } from "../../scripts/data-fetch";
import { search } from "../../scripts/fuzzy-search";

import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";

const ClassesPage: FC = () => {

  const pathname = window.location.pathname;
  const classCode = pathname.substring(7);
  
  if(classCode.length != 8){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>ERROR 404: PAGE NOT FOUND</h3>
          invalid class code
        </header>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>{classCode}</h3>
          WIP
        </header>
      </div>
    );
  }
};

export default ClassesPage;