import React, { FC, useState, useEffect } from "react";
import "./home.css";

import { search } from "../../scripts/fuzzy-search";

import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/search/search";
import Pages from "../pageList";
import Class from "../../components/class/class";
import { useAppSelector } from "../../store";

interface InputState {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  results: any[];
  time: number;
}

//let searched: boolean = false //TODO make it say loading before search completed

const HomePage: FC = () => {

  const { courses, hasError } = useAppSelector(state => state.courses);

  const [state, setState] = useState<InputState>({results:[], time:0});

  const [searchbar_content, content_update] = useState<string>("");

  const searchQuery = (query: string): void => {
    if(query === "") {
      setState({results: [], time: 0});
      return;
    }
    const before = performance.now();
    const results = search(query, Object.values(courses), ["id", "title", "description"]).slice(0,5);
    const after = performance.now();
    console.log(results);
    setState({results: results, time: Math.round(after - before)});
  };

  const call_search = React.useCallback((value: string): void => {
    searchQuery(value);
  }, [courses]);

  useEffect(() => {  
    const timeOutId = setTimeout(() => call_search(searchbar_content),200);
    return () => clearTimeout(timeOutId);
  },[searchbar_content,call_search]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar pages={Pages("Home")}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>CRISIS - Correcting Rensselaer{"'"}s Insufferable SIS</h3>
        <SearchBar content_update={content_update}/>
        {hasError && (
          <h2>THERES AN ERROR!!!!</h2>
        )}
        {state.results.map((el,pos) => {return <Class key={pos} data={el}/>;})}
      </header>
    </div>
  );
};

export default HomePage;
