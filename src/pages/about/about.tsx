import React, { FC } from "react";
import "./about.css";
import NavBar from "../../components/navbar/navbar";

import Pages from "../pageList";

const AboutPage: FC = () => {

  return (
    <div className="App">
      <header className="info-header">
        <NavBar pages={Pages("About")} />

        <h3 className="sub-header">ABOUT US</h3>
        <p className="about-text">
          CRISIS in an <b>open</b> source RCOS project designed to house various course, major, and student related
          tools for Rensselaer Polytechnic Institute.
        </p>
        <h3 className="sub-header">OUR GOAL</h3>
        <p className="about-text">
          The website is built with the idea to support the available
          functionality from the RPI SIS portal while simultaneously 
          creating a seemingly minimalistic design intended to surpass
          the current limited and insufficient tools offered.
        </p>
        <h3 className="sub-header">OUR PURPOSE</h3>

        <div className="boxes">
          <div className="box">
            <h5 className="little-header">RENOVATION</h5>
            <p className="about-text">
              Modernize the RPI SIS and provide a smoothing experience for RPI
              students to navigate through the portal and
            </p>
          </div>

          <div className="box">
            <h5 className="little-header">LEARNING</h5>
            <p className="about-text">
              going out of the page huahuhauhauaha???oijiojasdoijasoidjasdiojaosd
              asiodjaiosdjaiosdmaosidmasoidmasdoimsaoidmasoid
              
            </p>
          </div>
        </div>

      </header>
    </div>

  );
};
export default AboutPage;
