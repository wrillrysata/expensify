import React, { Component } from "react";
//import "../App.css";

const Header = props =>  (
    <div>
    <header className="header">
    <div className="container">
      <h1 className="header-title">{props.title} </h1>
      <h2 className="header-subtitle">{props.subtitle} </h2>
      </div>
      </header>
      </div>
  );

export default Header;
