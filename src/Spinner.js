/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./SeasonDisplay.css";

import React from "react";

import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        className="loader"
        color="red"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    );
  }
}
