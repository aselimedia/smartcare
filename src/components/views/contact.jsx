import { React, useEffect, useRef, useState } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_2elhq3s', 'template_d86q5tn', form.current, 'x_xpPuETTW5eeD_Ep')
    //     .then((result) => {
    //         console.log(result.text);
    //         setShow(true);
    //         form.current.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //         alert("Email Gagal Terkirim!")
    //     });
    // }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_th887lq', 'template_t9wxz3n', form.current, '7POJPvtOFOhv7sGoh')
        .then((result) => {
            setShow(true);
            form.current.reset();
            console.log(result.text);
        }, (error) => {
            alert("Email Gagal Terkirim!")
            console.log(error.text);
        });
    }

    return (
        <div className="App">
            <Header/>
            <Container>
                <section className="sub-product">
                    <ToastContainer position="middle-center" className="p-3">
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg="success">
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Success</strong>
                            </Toast.Header>
                            <Toast.Body>Yeay! Email Berhasil Terkirim!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    <div className="about-title text-center">
                        <span>Leave Us a Message</span>
                        <h4>Contact Us</h4>
                    </div>

                    <div className="detail-info">
                        <Row>
                            <Col md={6}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control type="text" placeholder="E.g. Uswanto" name="name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="Email" placeholder="E.g. uswanto@gmail.com" name="email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Messages Subject</Form.Label>
                                        <Form.Control type="text" placeholder="E.g. Komplain" name="subject" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={8} placeholder="add your messages ..." name="message" required />
                                    </Form.Group>
                                     <Button type="submit" className="w-100 btn-send">Send</Button>
                                </form>
                            </Col>
                            <Col md={6}>
                                <div className="contact-info">
                                    <p><a href={'http://wa.me/628992657760'} target="_blank" rel="noreferrer"><i className="uil uil-comments-alt"></i> 08992657760</a></p>
                                    <p><i className="uil uil-map-marker-alt"></i> Jl. Wikudoro No. 01 Malang</p>
                                    <p><i className="uil uil-envelope"></i> smartcarepatch@gmail.com</p>
                                    {/* <div className="contact-icon">
                                        <div className="icon">
                                            <i class="uil uil-instagram"></i>
                                        </div>
                                        <div className="icon">
                                        </div>
                                        <div className="icon">
                                        </div>
                                    </div> */}
                                    <p>Find Us on Map</p>
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24909.597684764438!2d112.6191764859741!3d-7.952992085678407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788281bdd08839%3A0xc915f268bffa831f!2sState%20University%20of%20Malang!5e0!3m2!1sen!2sid!4v1658671110460!5m2!1sen!2sid" className="w-100" height="325" frameborder="0"></iframe>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container>
            <Footer/>
        </div>
    );
};

export default Contact;