import React, { FC, useState, useEffect } from "react";
import "./classes.css";

import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";
import { CourseSearcher } from "../../scripts/fuzzy-search";
import { useAppSelector } from "../../store";
import { Course } from "../../types";

interface InputState {
  results: Course[];
}

const searcher = new CourseSearcher();

const ClassesPage: FC = () => {

  const pathname = window.location.pathname;
  const classCode = pathname.substring(7);
  const classDept = classCode.substring(0,4);
  const classNum = classCode.substring(4);

  //
  const { courses } = useAppSelector(state => state.courses);

  searcher.update(Object.values(courses));
  const results = searcher.search(classCode);
  //

  //if

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
  else if(results[0].id == classDept + "-" + classNum){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>{results[0].id}</h3>
          WIP
        </header>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>No class found</h3>
          Did you mean any of these:
        </header>
      </div>
    );
  }
};
export default ClassesPage;