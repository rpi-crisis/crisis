import React, { FC } from "react";
import "./about.css";
import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";
import { SiDiscord, SiGithub } from "react-icons/si";
import packagejson from "../../../package.json";

const AboutPage: FC = () => {

  return (
    <div className="App">
      <header className="info-header">
        <NavBar pages={Pages("About")} />

        <div>
          <h3 className="sub-header">ABOUT US</h3>
          <p className="about-text">
            CRISIS in an<strong className="bolder-color"> open source RCOS project </strong> 
            designed to house various course, major, and student related tools for Rensselaer 
            Polytechnic Institute.
          </p>
        </div>

        <div>
          <h3 className="sub-header">UTILIZATION</h3>
          <p className="about-text">
            Access to course descriptions, prerequisites to certain
            courses, cross-listings, transfer options by course, the course
            time, location, and professor during a certain semester, ability
            to major/dual major curriculums by year, a HASS pathway planner, and
            open to collaboration with RCOS scheduler projects whom wish to collaborate.
          </p>
          <p className="about-text">
            The website is built with the idea to 
            <strong className="bolder-color"> support the available functionality </strong> 
            from the RPI SIS portal while simultaneously 
            <strong className="bolder-color"> creating a seemingly minimalistic design </strong>
            intended to surpass the current limited and insufficient tools offered.
          </p>
        </div>

        <div>
          <h3 className="sub-header">PURPOSE</h3>
          <div className="boxes">
            <div className="box">
              <h5 className="little-header">RENOVATION</h5>
              <p className="about-text2">
                <strong className="bolder-color">Modernize</strong> and 
                <strong className="bolder-color"> renovate </strong> the current RPI SIS 
                and provide a smoothing experience for RPI students to navigate through.
              </p>
            </div>

            <div className="box">
              <h5 className="little-header">LEARNING</h5>
              <p className="about-text2">
                Open source project designed for<strong className="bolder-color"> hands-on learning </strong>
                for RPI students. Allows students to learn additional programming languages as part
                of their CS curriculum such as <strong className="bolder-color"> HTML, CSS, and ReactTS</strong>.
              </p>
            </div>
          </div>
        </div>
      </header>

      <footer className="info-footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>COPYRIGHT © 2021-2022 CRISIS Team</h4>
              <ul>
                <li> <a href="https://github.com/rpi-crisis/crisis/blob/main/LICENSE" target="_blank" rel="noreferrer noopener">LICENSE</a> </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>FOUNDERS</h4>
              <ul>
                <li> <a href="https://github.com/TrevorBrunette" target="_blank" rel="noreferrer noopener">TREVOR BRUNETTE</a> </li>
                <li> <a href="https://github.com/cxider" target="_blank" rel="noreferrer noopener">CORA MELVILLE</a> </li>
              </ul>
            </div>

            {/*<div className="footer-col">
              <h4>MEMBERS</h4>
              <ul>
                <li> <a href="https://github.com/Ardennt" target="_blank" rel="noreferrer noopener">JIAWEI WU</a> </li>
                <li> <a href="https://github.com/graya4" target="_blank" rel="noreferrer noopener">AKEYL GRAY</a> </li>
                <li> <a href="https://github.com/lilyritt" target="_blank" rel="noreferrer noopener">LILLY RITTER</a> </li>
                <li> <a href="https://github.com/nazime1" target="_blank" rel="noreferrer noopener">ERICA NAZIMOWITZ</a> </li>
                <li> <a href="https://github.com/Al3afifi" target="_blank" rel="noreferrer noopener">MUHAMMAD ALAFIFI</a> </li>
              </ul>
            </div>*/}

            <div className="footer-col">
              <h4>CRISIS {packagejson.version}</h4>
              <div className="social-links">
                <a href="https://discord.gg/7V2qHY9zP7" target="_blank" rel="noreferrer noopener"><SiDiscord color={"black"} /></a>
                <a href="https://github.com/rpi-crisis/crisis" target="_blank" rel="noreferrer noopener"><SiGithub color={"black"} /></a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>

  );
};
export default AboutPage;
