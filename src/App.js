import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./Travel";
import porto from "./Porto.JPG";
import seville from "./Seville.JPG";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes voyages</h1>
        </header>
        <Travel
          destination="Porto"
          country="Portugal"
          photo={porto}
          distance="1498"
        />
        <Travel
          destination="Séville"
          country="Espagne"
          photo={seville}
          distance="1674"
        />
      </div>
    );
  }
}

export default App;