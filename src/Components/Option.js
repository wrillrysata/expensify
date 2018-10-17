import React, { Component } from "react";
//import "../App.css";

const Option = props => (
    <div className="option">

      <p className="option__text">{props.count+1}. {props.optionText}</p>
      <button className="button button--link"
       onClick={(e) =>{
          props.handleDeleteOption(props.optionText)
      }
    }>
Remove
      </button>
    </div>
  );

export default Option;
