/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./SeasonDisplay.css";
import React from "react";

const spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.text}</div>
    </div>
  );
};

export default spinner;
