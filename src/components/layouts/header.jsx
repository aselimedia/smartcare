import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.svg'

const header = () => {
    return (
        <Navbar fixed="top" bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#home">Home</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#product">Product</Nav.Link>
                    <Nav.Link as={Link} to={'/contact-us'}>Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default header;