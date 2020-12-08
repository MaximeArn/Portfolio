import React from "react";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => (
  <div className="app">
    <NavBar />
    <Landing />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
