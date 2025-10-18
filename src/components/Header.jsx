import React from "react";
import "./theme.css";
import "./header.css";

const Header = ({ title, subtitle, background }) => {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
