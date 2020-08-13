/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
