import React from "react";
import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const links = ["home", "about", "services", "portfolio", "blog"];
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "menu" : "menu closed"}>
      <i className="closeMenuIcon" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </i>
      <nav>
        <ul className="link-list">
          {links.map((link) => (
            <li className="list-item">
              <a className="list-item-link" href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
