/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function ContactCanvas() {
    return (
        <div id="contact-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">Contact Us</h3>
                <ul className="uk-list">
                    <li>
                        <a uk-icon="icon: mail" className="contact-icon contact-link-icon"
                            href=""></a>
                        <a className="contact-link contact-li uk-text-middle"
                            href="">something@quality-creations.com</a>
                    </li>
                    <li>
                        <span className="contact-icon" uk-icon="icon: receiver"></span>
                        <span className="contact-li uk-text-middle">(555) 555-5555</span>
                    </li>
                    <li>
                        <span uk-icon="icon: home" className="contact-icon"></span>
                        <span className="contact-li uk-text-bottom">Seattle, WA 98199</span>
                    </li>
                    <li>
                        <a uk-icon="icon: github" href=""
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-middle" href=""
                            target="_blank">?</a>
                    </li>
                    <li>
                        <a uk-icon="icon: linkedin" href=""
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-bottom" href=""
                            target="_blank">?</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default ContactCanvas;