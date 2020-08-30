/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Spinner";
// scaffolding APP

class App extends React.Component {
  // initialize the state
  // constructor(props) {
  //   super(props);

  // state system
  // this is only time we do direct assignment
  //  to this.state

  // initilaize with sate
  // this.state = { lat: null, lng: null, errorMessage: "" };

  // using with state system
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       // update state with setState
  //       this.setState({ lat: position.coords.latitude });
  //       this.setState({ lng: position.coords.longitude });
  //     },
  //     (err) => {
  //       this.setState({ errorMessage: err.message });
  //     }
  //   );
  // }

  state = { lat: null, errorMessage: "" };
  //  component lifecycle method

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render
  render() {
    // rendering conditions
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
