import React, { FC } from "react";
import './about.css';
import NavBar from "../../components/navbar/navbar";

import Pages from "../pageList";

const AboutPage: FC = () => {

  return (
    <div className="App">
      <header className="info-header">
        <NavBar pages={Pages("About")} />
        <h3>About page</h3>
        <p className="about-text">CRISIS is an open source RCOS project: a website that houses various course and major related tools
          for my college, Rensselaer Polytechnic Institute, since we believe that the offered tools are insufficient.</p>
      </header>
    </div>
  );
}
export default AboutPage;
