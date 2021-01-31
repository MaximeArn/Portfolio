import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navBar.scss";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const handleScroll = () => {
    if (pathname === "/") {
      window.scrollY > 100
        ? navbar.current.classList.add("scrolled")
        : navbar.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <header
        className={pathname !== "/" ? "navbar scrolled" : "navbar"}
        ref={navbar}
      >
        <div className="logo-section">
          <div className="logo">
            <p>M</p>
          </div>
          <div className="logo-text">
            <h1>Maxime Arnould</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
        <i className="burger-icon" onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </i>
      </header>
    </>
  );
};

export default NavBar;
