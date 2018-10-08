import React, { Component } from "react";
import "../App.css";

const Option = props => (
    <div class="content-wrap">
    <div className="option">
      <p>{props.optionText}</p>
      <button onClick={(e) =>{
          props.handleDeleteOption(props.optionText)
      }
    }>
Remove
      </button>
    </div>
    </div>
  );

export default Option;
