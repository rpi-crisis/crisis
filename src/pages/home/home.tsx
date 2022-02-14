import React, { FC, useState, useEffect } from "react";
//import logo from '../../res/images/kool-aid_cat.png';
import './home.css';

import { getJsonData } from "../../scripts/data-fetch";
import { search } from "../../scripts/fuzzy-search";

import NavBar from '../../components/navbar/navbar';
import SearchBar from '../../components/search/search';
import Pages from '../pageList'
import Class from "../../components/class/class";

interface InputState {
  results: any[];
  time: number;
}

let courses_json: any[] = []
//let searched: boolean = false //TODO make it say loading before search completed

getJsonData()
  .then(res => {
    courses_json = res;
  }
);

const HomePage: FC = () => {

  const [state, setState] = useState<InputState>({results:[], time:0});

  let [searchbar_content, content_update] = useState<string>("");

  const searchQuery = (query: string):void => {
    if(query==="") {
      setState({results: [], time: 0});
      return;
    }
    let before = performance.now();
    let results = search(query, courses_json, ["id", "title", "description"]).slice(0,5);
    let after = performance.now();
    console.log(results)
    setState({results: results, time: Math.round(after-before)});
  }

 const call_search = React.useCallback((value:string):void => {
  searchQuery(value);
}, []);

  useEffect(() => {  
    const timeOutId = setTimeout(() => call_search(searchbar_content),200);
    return () => clearTimeout(timeOutId);
  }, [searchbar_content,call_search]);

  return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Home")}/>
	        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3>CRISIS - Correcting RPI's Insufferable SIS</h3>
          <SearchBar content_update={content_update}/>
	        {state.results.map((el,pos) => {return <Class key={pos} data={el}/>})}
        </header>
      </div>
  )
}

export default HomePage;
