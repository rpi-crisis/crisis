import React, { FC } from "react";
import "./search.css"

const SearchBar: FC = () => {
  return (
    <div className="searchbar">
      <div className="textbox">
        <input></input>
      </div>
      <div className='search'>
        <div id="hand" />
        <div id="circ" />
      </div>
    </div>
  )
}

export default SearchBar;
