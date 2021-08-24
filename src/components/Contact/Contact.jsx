import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Contact.css';

const Contact = () => {
    return (
        <main className="container my-3 rounded" id="main">
            <div className="row">
                <div className="col">
                    {/* <!-- Header row --> */}
                    <div className="row rounded-top" id="contactBanner">
                    </div>
                    <h2 className="font-weight-bold" id="main-header">
                        Contact
                    </h2>
                </div>
            </div>
            <div className="row px-3 mb-4">
                <p className="paragraph text-center">Feel free to contact me via GitHub, Linkedin, and Email!</p>
                <div className="col text-light paragraph text-center">
                    <a href="https://github.com/rhwlffk1028" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size='4x' className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/kevchoi/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size='4x' className="icons" />
                    </a>
                    <a href="mailto:kevchoi1028@gmail.com" target="_blank">
                        <FontAwesomeIcon icon={faInbox} size='4x' className="icons" />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Contact;