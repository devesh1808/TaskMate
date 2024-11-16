import React from "react";
import Logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark activeTheme"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="GThree"></span>
      </div>
    </header>
  );
};
