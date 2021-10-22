import React, { FC } from "react";
import "./design.css"

const DesignTest : FC = () => {
  return(
    <div className="design">
      <header className="design-header">
        I am a header
      </header>

      <div className="design-content">
        I am the main content
      </div>

      <footer className="design-footer">
        I am a footer
      </footer>
    </div>
    );
}

export default DesignTest;
