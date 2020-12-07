import React from "react";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio2";

const App = () => (
  <div className="app">
    <NavBar />
    <Landing />
    <About />
    <Services />
    <Portfolio />
  </div>
);

export default App;
