import { React, useEffect } from "react";
import '../assets/css/style.css';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../layouts/header";
import Rupiah from "../data/rupiah";
import Abouts from '../data/about.json';
import Datas from "../data/data.json";
import Footer from "../layouts/footer";
import Disqus from "disqus-react";

const LandingPage = () => {

    useEffect(() => {
        document.title = 'SmartCare';
    }, []);
    
    const disqusShortname = "smartcareofficial"
    const disqusConfig = {
        url: "http://localhost:3000",
        identifier: "home",
        title: "SmartCare Official"
    }

    return (
        <div className="App">
            <Header />
            <section id="home">
                <div className="jumbotron">
                    <Container>
                        <div className="display">
                            <h4>Health Plaster with</h4>
                            <h4>Cute Packaging</h4>
                            <span>Best Choice for Your Wound</span>
                        </div>
                        <button className="btn-jumbotron mt-4" onClick={() => window.location.href='/#product'}>Buy Now</button>
                    </Container>
                </div>

                <section class="lp-mobile-view">
                    <Container>
                        <h4>Health Plaster with</h4>
                        <h4>Cute Packaging</h4>
                        <span>Best Choice for Your Wound</span>
                        <button className="btn-jumbotron-mobile mt-4" onClick={() => window.location.href='/#product'}>Buy Now</button>
                    </Container>
                </section>
            </section>
            <Container>
                <section id="about">
                    <div className="about-one">
                        <Row className="align-items-center">
                            <Col md={5}>
                                <div className="about-title">
                                    <span>Why Should Us?</span>
                                    <h4>The Best Plaster Ever</h4>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="about-desc">
                                    <p>SmartCare adalah plester patch dengan kombinasi 4 bahan yakni, hydrogel, wound dressing, bahan aktif anti bakteri dan aromatherapy dengan bahan komposit ZnO/Chitosan/PVA/Ekstrak Daun Binahong yang memiliki fungsi 4in1 sebagai penyembuh luka, penghilang bekas luka, antibakteri dan anti inflamasi. Dibandingkan dengan plester yang beredar di pasaran, SmartCare Plast menunjukkan keefektivitasan penyembuhan luka lebih cepat dan regenerasi sel yang baik tanpa menimbulkan bekas luka. SmartCare merupakan plester pertama di Indonesia yang memiliki permeabilitas oksigen yang baik sehingga tidak akan menimbulkan kulit mati dan gatal.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="about-two">
                        <Row>
                            {Abouts.map((about) => (
                                <Col md={4} sm={12}>
                                    <div className="box" key={about.id}>
                                        <div className="mb-5">
                                            <img src={about.img} alt="" />
                                        </div>
                                        <div className="box-title">
                                            <h5>{about.title}</h5>
                                            <span>{about.text}</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>

                <section className="video">
                    <div className="about-three">
                        <Row>
                            <Col md={6}>
                                <div className="box-video">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KMT5uTF5HK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="video-text">
                                    <div className="about-title">
                                        <span>How to Use</span>
                                        <h4>How to Use Plaster Properly</h4>
                                        <ol>
                                            <li>Mencuci tangan dengan bersih</li>
                                            <li>Hentikan pendarahan</li>
                                            <li>Bersihkan luka dengan air atau cairan pembersih luka</li>
                                            <li>Tutupi luka dengan plester secara sempurna</li>
                                        </ol>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section id="product">
                    <div className="about-title text-center mt-5">
                        <span>Our Product</span>
                        <h4>Smart Care</h4>
                    </div>

                    <div className="product-list">
                        <Row>
                            {Datas.map((data) => (
                                <Col md={4}>
                                    <div className="product-info">
                                        <a href={`/product/${data.id}`}>
                                            <img src={data.gambar} alt="" />
                                            <div className="product-text">
                                                <h6>{data.nama}</h6>
                                                <span>{Rupiah(data.harga)}</span>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>

                <section id="disqus">
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </section>
            </Container>
            <Footer />
        </div>
    );
};

export default LandingPage;