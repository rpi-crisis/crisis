import React, { FC } from "react";
import "./search.css"
import Tag from "./tag/tag";
const SearchBar: FC<{content_update:(content:string)=>void, searchFunc:()=>void, tags:string[], tag_update:(tags:string[])=>void}> = ({content_update,searchFunc,tags,tag_update}) => {

  const remove_tag = (name:string):void => {
    let temp:string[] = [...tags].filter(el => el !==name);
    tag_update(temp);
  }

  const add_tag = (name:string):void => {
    if(tags.find(el => el===name) === undefined){
      let temp:string[] = [...tags,name];
      tag_update(temp);
    }
  }

  const keydown = (event:React.KeyboardEvent):void => {
    if(event.code === "Enter"){
      //@ts-ignore sshhh there really is a value here
      add_tag(event.target.value);
    }
  }
  return (
    <div>
      <div className="searchbar">
        <div className="textbox">
          <input name='search' onChange={(e) => content_update(e.target.value)} onKeyDown={keydown}></input>
      </div>
      <div className='search' onClick={searchFunc}>
        <div id="hand" />
        <div id="circ" />
      </div>
    </div>
    <div className="tagbox">
      {tags.map((text: string, key: number) => <Tag key={key} name={text} remove={remove_tag} />)}
    </div>
    </div>
  )
}

export default SearchBar;
