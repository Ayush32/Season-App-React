/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do directly assignment
    // to this.state
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
