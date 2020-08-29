/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom";

// scaffolding APP

class App extends React.components {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
