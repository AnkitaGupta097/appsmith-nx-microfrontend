import React from "react";
import "./Header.css";

interface HeaderProps {
  logoSrc?: string;
  heading?: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, heading = "appsmith_" }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoSrc} alt="Logo" className="logo" />
        <h1 className="heading">{heading}</h1>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="header-right">
        <i className="help-icon">?</i>
        <i className="profile-icon">👤</i>
      </div>
    </header>
  );
};

export default Header;
