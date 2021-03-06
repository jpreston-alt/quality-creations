/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  navbar: {
    backgroundColor: "transparent",
  },
};

function Navbar(props) {
  return (
    <div>
      <nav
        className="uk-navbar-container uk-navbar navbar"
        style={style.navbar}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav uk-visible@m">
            <li>
              <Link to="/" className="nav-item" style={{ color: props.color }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-item"
                style={{ color: props.color }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-item"
                style={{ color: props.color }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/our-work"
                className="nav-item"
                style={{ color: props.color }}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="nav-item"
                style={{ color: props.color }}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="nav-item"
                style={{ color: props.color }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <a
                uk-toggle="target: #contact-canvas"
                className="nav-item"
                style={{ color: props.color }}
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            className="uk-hidden@m"
            href="#menu-canvas"
            uk-toggle="target: #menu-canvas"
          >
            <span className="menu-icon" uk-icon="icon: menu; ratio: 1.5"></span>
          </a>
        </div>
        <div class="uk-navbar-right navbar-name">Quality Creations</div>
      </nav>
    </div>
  );
}

export default Navbar;
