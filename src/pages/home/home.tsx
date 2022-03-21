import React, { FC, useState, useEffect, useCallback } from "react";
import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/search/search";
import Pages from "../pageList";
import Class from "../../components/class/class";
import { CourseSearcher } from "../../scripts/fuzzy-search";
import { useAppSelector } from "../../store";
import { Course } from "../../types";

import "./home.css";
import logo from "../../res/images/crisis-logo-trimmed-1.png";


interface InputState {
  results: Course[];
}

const searcher = new CourseSearcher();

const HomePage: FC = () => {

  const { courses } = useAppSelector(state => state.courses);

  const [state, setState] = useState<InputState>({results: []});

  const [searchbar_content, content_update] = useState<string>("");

  const searchQuery = (query: string): void => {
    if(query === "") {
      setState({results: []});
      return;
    }

    searcher.update(Object.values(courses));
    const results = searcher.search(query);
    setState({results: results.splice(0, 5)});
  };

  const call_search = useCallback((value: string): void => {
    searchQuery(value);
  }, [courses]);

  useEffect(() => {  
    const timeOutId = setTimeout(() => call_search(searchbar_content),200);
    return () => clearTimeout(timeOutId);
  },[searchbar_content, call_search]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar pages={Pages("Home")}/>
        {<img src={logo} className="App-logo" alt="logo" />}
        <h3>Correcting Rensselaer{"'"}s Insufferable SIS</h3>
        <SearchBar content_update={content_update}/>
        {state.results.map((el,pos) => {return <Class key={pos} data={el}/>;})}
      </header>
    </div>
  );
};

export default HomePage;
