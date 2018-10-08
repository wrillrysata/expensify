import React, { Component } from "react";
import "../App.css";

const Action = (props) =>  ( //implicitly returning jsx
    <div class="content-wrap">
    <div>
    <button  className="big-button" disabled={!props.hasOption} onClick={props.handlePick}>
      What should I do
    </button>
    </div>
    </div>
  );

export default Action;
