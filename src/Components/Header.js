import React, { Component } from "react";
import "../App.css";

const Header = props => {
  return (
    <div className="content-wrap">
    <header className="header">
      <h1 className="header-title">{props.title} </h1>
      <h2 className="header-subtitle">{props.subtitle} </h2>
      </header>
    </div>
  );
};

export default Header;
