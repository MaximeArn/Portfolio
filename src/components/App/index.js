import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => (
  <Switch>
    <div className="app">
      <NavBar />
      <Route exact path="/">
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </Route>
      <Route path="/project/:name"></Route>
    </div>
  </Switch>
);

export default App;
