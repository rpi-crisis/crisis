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

  let text: JSX.Element[] = pages.map(el => (
      <div className='link-text'>
        {el.text}
      </div>
    )
  )

  let boxes: JSX.Element[] = pages.map((el,pos) => {
      if(el.external) {
        return (
          <a
            className="link"
            href={el.external}
            target="_blank"
            rel="noopener noreferrer"
            style={el.external===undefined?{display:"None"}:{}}
          >
            {text[pos]}
          </a>
        )
      }
      return (
        <Link
          to={el.path} className="link"
          style={el.external===undefined?{}:{display:"None"}}
        >
          {text[pos]}
        </Link>
      )
    }
  )

  return (
    <div className="bar">
      {pages.map((el,pos) => (
        <div className="link-box"
          style={el.active?
            {background :"var(--text-color)",color:"var(--bg-color)"}:
            {background :"var(--nav-color)",color:"var(--text-color)"}
        }>
          {boxes[pos]}
        </div>
      ))}
    </div>
  );
}

export default NavBar;
