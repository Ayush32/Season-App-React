/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";

// scaffolding APP

class App extends React.Component {
  // initialize the state
  constructor(props) {
    super(props);

    // state system
    // this is only time we do direct assignment
    //  to this.state
    this.state = { lat: null };
    this.state = { lng: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ lng: position.coords.longitude });
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render
  render() {
    return (
      <div>
        Latitude:{this.state.lat}
        <br />
        Longitude:{this.state.lng}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
