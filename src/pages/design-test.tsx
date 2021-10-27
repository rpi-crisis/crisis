import React, { FC } from "react";
import "./design.css"

const DesignTest : FC = () => {
  return(
    <div className="design">
      <header className="design-header">
        Home  |  About  |  GitHub
      </header>

      <div className="design-content">
        I am the main content
      </div>

      <footer className="design-footer">
        CRISIS - Correcting Rensselaer's Insufferable SIS
      </footer>
    </div>
    );
}

export default DesignTest;
