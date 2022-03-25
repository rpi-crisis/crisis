import React, { ChangeEvent, FC } from "react";
import "./search.css";

const SearchBar: FC<{content_update: (content: string)=> void}> = ({content_update}) => {
  return (
    <div>
      <div className="searchbar">
        <div className="textbox">
          <input name='search' maxLength={50} onChange={(e: ChangeEvent<HTMLInputElement>) => content_update(e.target.value)} placeholder="Enter Class"/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
