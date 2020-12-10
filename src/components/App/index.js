import React, { useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import getProjectByName from "../../utils/getProjectByName";
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
      <Route exact path="/">
        <NavBar />
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </Route>
      <NavBar />
      <Route path="/project/:projectName">
        <NavBar />
        <ProjectDetail />
      </Route>
    </>
  </Switch>
);

export default App;
