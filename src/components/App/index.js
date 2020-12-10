import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

const App = () => (
  <Switch>
    <>
      <NavBar />
      <Route exact path="/">
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </Route>
      <Route path="/project/:projectName" component={ProjectDetail} />
    </>
  </Switch>
);

export default App;
