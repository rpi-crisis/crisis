import React, { FC } from "react";
import "./about.css";
import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";
import discord from "../about/images/discord-logo.png";
import github from "../about/images/github-logo.png";

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
          <h3 className="sub-header">OUR GOAL</h3>
          <p className="about-text">
            The website is built with the idea to 
            <strong className="bolder-color"> support the available functionality </strong> 
            from the RPI SIS portal while simultaneously 
            <strong className="bolder-color"> creating a seemingly minimalistic design </strong>
            intended to surpass the current limited and insufficient tools offered.
          </p>
        </div>

        <div>
          <h3 className="sub-header">OUR PURPOSE</h3>
          <div className="boxes">
            <div className="box">
              <h5 className="little-header">RENOVATION</h5>
              <p className="about-text">
                <strong className="bolder-color">Modernize</strong> and 
                <strong className="bolder-color"> renovate </strong> the current RPI SIS 
                and provide a smoothing experience for RPI students to navigate through.
              </p>
            </div>

            <div className="box">
              <h5 className="little-header">LEARNING</h5>
              <p className="about-text">
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
              <h4>COPYRIGHT</h4>
              <ul>
                <li> <a href="#">LICENSE</a> </li>
                <li> <a href="#">TERMS</a> </li>
                <li> <a href="#">ALT</a> </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>MEMBERS</h4>
              <ul>
                <li> JIAWEI WU </li>
                <li> JIAWEI WU </li>
                <li> JIAWEI WU </li>
                <li> JIAWEI WU </li>
                <li> JIAWEI WU </li>
                <li> JIAWEI WU </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>C.R.I.S.I.S</h4>
              <ul>
                <li> <a href="#"><img src={discord} height={50} width={50}></img></a> </li>
                <li> <a href="#"><img src={github} height={50} width={50}></img></a> </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
      
    </div>

  );
};
export default AboutPage;
