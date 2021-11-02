import React, { FC } from "react";
import {A} from "hookrouter";
import "./navbar.css"

type page = {
    text:string,
    path:string,
    active:boolean,
    external?:string
}

const NavBar: FC<{pages:page[]}> = ({pages}) => {

  return (
    <div className="bar">
    {pages.map(el => {
      let text = (
        <div className="link-text">
          {el.text}
        </div>
      )
      return (
        <div className="link-box"
          style={el.active?
            {background :"var(--text-color)",color:"var(--bg-color)"}:
            {background :"var(--nav-color)",color:"var(--text-color)"}
        }>
          <a
            className="link"
            href={el.external}
            target="_blank"
            rel="noopener noreferrer"
            style={el.external===undefined?{display:"None"}:{}}
          >
            {text}
          </a>
          <A
            href={el.path} className="link"
            style={el.external===undefined?{}:{display:"None"}}
          >
            {text}
          </A>
        </div>
    )})}
    </div>
  );
}

export default NavBar;
