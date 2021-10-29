import React, { FC } from "react";
import {Link} from "react-router-dom";
import {A} from "hookrouter";
import '../App.css';
import './about.css';

const AboutPage: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>About page</h3>
        <p className="about-text">CRISIS is an open source RCOS project: a website that houses various course and major related tools
          for my college, Rensselaer Polytechnic Institute, since we believe that the offered tools are insufficient.</p>
        <A
          href="/" >
          Home
        </A>
      </header>
    </div>
  );
}

export default AboutPage;