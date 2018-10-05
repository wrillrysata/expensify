import React, { Component } from "react";
import "../App.css";
import Option from "./Option";

const Options = props => {
  return (
    <div class="content-wrap">
    <div class="option-header">
    <h3>Things to do</h3>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      </div>

{props.options.length === 0 && <p>Add an option to get started</p>}
      {props.options.map((option) => (
        <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption = {props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;

