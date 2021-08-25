import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer pt-1 mt-3 fixed-bottom">
            <div className="d-flex flex-column">
                <div className="container-fluid text-center">
                    <span>&#169; Copyright 2021 Kevin Choi</span>
                </div>
                <div className="container-fluid text-center media-footer">
                    <a href="https://github.com/rhwlffk1028" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size='2x' className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/kevchoi/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' className="icons" />
                    </a>
                    <a href="mailto:kevchoi1028@gmail.com" target="_blank">
                        <FontAwesomeIcon icon={faInbox} size='2x' className="icons" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;