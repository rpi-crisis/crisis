import React, { FC } from "react";
import './about.css';
import NavBar from "../navbar/navbar";

const AboutPage: FC = () => {
  let pages: {text:string, path:string, active:boolean, external?:string}[] = [
    {
      text:"Home",
      path:"/",
      active:false,
    },
    {
      text:"About",
      path:"/about",
      active:true,
    },
    {
      text:"GitHub",
      path:"/",
      active:false,
      external:"https://github.com/rpi-crisis/crisis"
    },
  ]

  return (
    <div className="App">
      <header className="info-header">
        <NavBar pages={pages} />
        <h3>About page</h3>
        <p className="about-text">CRISIS is an open source RCOS project: a website that houses various course and major related tools
          for my college, Rensselaer Polytechnic Institute, since we believe that the offered tools are insufficient.</p>
      </header>
    </div>
  );
}

export default AboutPage;
