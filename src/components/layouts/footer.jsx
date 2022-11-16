import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="App">
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="footer-logo">
                                <Row>
                                    <Col md={12}>
                                        <a href="/"><img src={Logo} alt="" /></a>
                                    </Col>
                                    <Col md={12} className="mt-4">
                                        <span>Sembuh Cepat, bersama plester hebat <br /> untuk perawatan luka yang tepat</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={2}>
                             <div className="footer-text">
                                <h4>Resources</h4>
                                <ul>
                                    <li>
                                        <a href={'/#home'}>Home</a>
                                    </li>
                                    <li>
                                        <a href={'/#about'}>About</a>
                                    </li>
                                    <li>
                                        <a href={'/#product'}>Product</a>
                                    </li>
                                    <li>
                                        <Link to={'/contact-us'}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-text">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <a href={'http://wa.me/628992657760'} target="_blank" rel="noreferrer"><i className="uil uil-comments-alt"></i> 08992657760</a>
                                    </li>
                                    <li>
                                        <i className="uil uil-map-marker-alt"></i> Jl. Wikudoro No. 01 Malang
                                    </li>
                                    <li>
                                        <i className="uil uil-envelope"></i> smartcarepatch@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copy-right">
                <span>Copyright &copy;Smartcare {new Date().getFullYear()}. All Rights Reserved.</span>
            </div>
        </div>
    );
};

export default Footer;