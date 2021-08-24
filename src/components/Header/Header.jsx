import React from 'react';
import resume from '../../files/resume-of-kevin.pdf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Header.css";


const Header = () => {
    return (
            <Navbar className="header">
                <Container className="media-container">
                    <Navbar.Brand className="brandFont text-light">Kevin Choi</Navbar.Brand>
                    <Nav className="justfiy-content-end media-nav">
                        <Nav.Link href="/" className="h5 text-light navlink">About Me</Nav.Link>
                        <Nav.Link href="/project" className="h5 text-light navlink">Projects</Nav.Link>
                        <Nav.Link href="/contact" className="h5 text-light navlink">Contact</Nav.Link>
                        <Nav.Link href={resume} className="h5 text-light navlink" target="_blank">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default Header;