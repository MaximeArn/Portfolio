import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./menu.scss";

const links = ["home", "about", "services", "portfolio", "contact"];
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "menu" : "menu closed"}>
      <i className="closeMenuIcon" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </i>
      <nav>
        <ul className="link-list">
          {links.map((link) => (
            <li
              key={link}
              className="list-item"
              onClick={() => setMenuOpen(false)}
            >
              <HashLink to={`/#${link}`}>
                <p className="list-item-link">{link}</p>
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
