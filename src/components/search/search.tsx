import React, { FC } from "react";
import "./search.css";
//import Tag from "./tag/tag";
const SearchBar: FC<{content_update: (content: string)=> void}> = ({content_update}) => {
  return (
    <div>
      <div className="searchbar">
        <div className="textbox">
          <input name='search' onChange={(e) => content_update(e.target.value)} placeholder="Enter Class"/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
