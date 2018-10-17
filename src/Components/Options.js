import React, { Component } from "react";
//import "../App.css";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Things to do</h3>
      <button className="button button--link"
       onClick={props.handleDeleteOptions} >
       Remove All
       </button>
      </div>
{props.options.length === 0 && <p className="widget__message">Add an option to get started</p>}
      {props.options.map((option, index) => (
        <Option 
        count={index}
        key={option} 
        optionText={option} 
        handleDeleteOption = {props.handleDeleteOption}
        />
      ))}
      </div>
  );

export default Options;

