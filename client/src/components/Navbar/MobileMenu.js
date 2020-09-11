/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MobileMenu(props) {
    return (
        <div id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list">
                    <li><Link to="/" className="nav-item mobile-nav-item" style={{ color: props.color }}>Home</Link></li>
                    <li><Link to="/about" className="nav-item mobile-nav-item" style={{ color: props.color }}>About</Link></li>
                    <li><Link to="/services" className="nav-item mobile-nav-item" style={{ color: props.color }}>Services</Link></li>
                    <li><Link to="/our-work" className="nav-item mobile-nav-item" style={{ color: props.color }}>Our Work</Link></li>
                    <li><Link to="/careers" className="nav-item mobile-nav-item" style={{ color: props.color }}>Careers</Link></li>
                    <li><Link to="/faq" className="nav-item mobile-nav-item" style={{ color: props.color }}>FAQ</Link></li>
                    <li><a uk-toggle="target: #contact-canvas" className="nav-item mobile-nav-item" style={{ color: props.color }}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default MobileMenu;