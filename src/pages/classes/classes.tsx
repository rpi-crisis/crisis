import React, { FC /*,  useState, useEffect */ } from "react";
import "./classes.css";

import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";
import { CourseSearcher } from "../../scripts/fuzzy-search";
import { useAppSelector } from "../../store";
import { Course } from "../../types";

interface InputState {
  results: Course;
}

const ClassesPage: FC = () => {

  const pathname = window.location.pathname;
  const classCode = pathname.substring(7);
  const classDept = classCode.substring(0,4);
  const classNum = classCode.substring(4);


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
          <h3>{classDept}-{classNum}</h3>
          WIP
        </header>
      </div>
    );
  }
};
export default ClassesPage;