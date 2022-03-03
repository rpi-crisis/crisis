import React, { FC, useState, useEffect } from "react";
//import logo from '../../res/images/kool-aid_cat.png';
import "./classes.css";

import { getJsonData } from "../../scripts/data-fetch";
import { search } from "../../scripts/fuzzy-search";

import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/search/search";
import Pages from "../pageList";
import Class from "../../components/class/class";

interface InputState {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  results: any[];
  time: number;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
let courses_json: any[] = [];
//let searched: boolean = false //TODO make it say loading before search completed

getJsonData()
  .then(res => {
    courses_json = res;
  }
  );

const ClassesPage: FC = () => {

  const [state, setState] = useState<InputState>({results:[], time:0});

  const [searchbar_content, content_update] = useState<string>("");

  const searchQuery = (query: string): void => {
    if(query === "") {
      setState({results: [], time: 0});
      return;
    }
    const before = performance.now();
    const results = search(query, courses_json, ["department"]).slice(0,7);
    const after = performance.now();
    console.log(results);
    setState({results: results, time: Math.round(after - before)});
  };

  const call_search = React.useCallback((value: string): void => {
    searchQuery(value);
  }, []);

  useEffect(() => {  
    const timeOutId = setTimeout(() => call_search(searchbar_content),200);
    return () => clearTimeout(timeOutId);
  },[searchbar_content,call_search]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar pages={Pages("Classes")}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>Enter the department you want</h3>
        <SearchBar content_update={content_update}/>
        {state.results.map((el,pos) => {return <Class key={pos} data={el}/>;})}
      </header>
    </div>
  );
};

export default ClassesPage;