import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Settings from "../settings/settings";
import {BiCog} from "react-icons/bi";

type page = {
    text: string,
    path: string,
    active: boolean,
    external?: string
}

const NavBar: FC<{pages: page[]}> = ({pages}) => {

  const text: JSX.Element[] = pages.map((el, pos) => (
    <div className='link-text' key={pos}>
      {el.text}
    </div>
  )
  );

  const boxes: JSX.Element[] = pages.map((el,pos) => {
    if(el.external) {
      return (
        <a
          className="link"
          href={el.external}
          target="_blank"
          rel="noopener noreferrer"
          style={el.external === undefined ? {display:"None"} : {}}
          key={pos}
        >
          {text[pos]}
        </a>
      );
    }
    return (
      <Link
        to={el.path} className="link"
        style={el.external === undefined ? {} : {display:"None"}}
        key={pos}
      >
        {text[pos]}
      </Link>
    );
  }
  );

  return (
    <div className="overarching-bar bar">
      <span>
        <BiCog className="dummy-settings-icon"/>
      </span>
      <div className="bar">
        {pages.map((el,pos) => (
          <div className="link-box"
            style={el.active ?
              {background: "var(--text-color)", color: "var(--bg-color)"} :
              {background: "var(--nav-color)", color: "var(--text-color)"}
            }
            key={pos}
          >
            {boxes[pos]}
          </div>
        ))}
      </div>
      <Settings />
    </div>
  );
};

export default NavBar;
