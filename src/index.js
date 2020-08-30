/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
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

  renderContent() {
    // rendering conditions
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner text="Please Allow Your Location" />;
  }

  // React says we have to define resnder
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
