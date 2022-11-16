import { React, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import '../assets/css/detail.css';
import Header from "../layouts/header";
import Datas from "../data/data.json";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Rupiah from "../data/rupiah";
import rupiah from "../data/rupiah";
import Footer from "../layouts/footer";
import Disqus from "disqus-react";

const Product = () => {
    const [dataObj, setDataObject] = useState({});
    const [click, setClick] = useState("");
    const {id} = useParams();
    
    useEffect(() => {
        const dataObj = Datas.find((d) => d.id === parseInt(id));
        setDataObject(dataObj);
        document.title = 'Product';
        view();
    }, [id]);

    const disqusShortname = "smartcareofficial"
    const disqusConfig = {
        url: "http://localhost:3000",
        identifier: "home",
        title: "Title of Your Article"
    }

    const view = () => {
        let gid 
        switch(id) {
            case '1':
                gid = 'one'
                break;
            case '2':
                gid = 'two'
                break;
            case '3':
                gid = 'three'
                break;
            case '4':
                gid = 'four'
                break;
            case '5':
                gid = 'five'
                break;
            case '6':
                gid = 'six'
                break;
            case '7':
                gid = 'seven'
                break;
            default:
                break;
        }

        fetch(`https://api.countapi.xyz/hit/smartcareofficial.com/${gid}`)
            .then(res => res.json())
            .then(res => {
                setClick(res.value)
            }
        )
    }

    return (
        <div className="App">
            <Header />
            <Container>
                <section className="sub-product">
                    <div className="about-title text-center">
                        <span>Detail Product</span>
                        <h4>{dataObj.jenis}</h4>
                    </div>

                    <div className="detail-info">
                        <Row>
                            <Col md={6}>
                                <div className="detail-gambar" key={dataObj.id}>
                                    <img src={dataObj.gambar} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="detail">
                                    <h4>{dataObj.nama}</h4>
                                    <span><i className="uil uil-eye"></i> Viewed as many as <b>{click}</b> person</span>

                                    <p className="detail-text-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tempus purus, eget mattis odio suscipit at. Phasellus suscipit porttitor volutpat. Quisque blandit, purus sed blandit auctor, lorem mi tincidunt lorem, et imperdiet massa mauris vitae magna. </p>

                                    <div className="detail-price">
                                        <h4>{Rupiah(dataObj.harga)}</h4>
                                        <span>*Available 35 Pcs</span>
                                    </div>

                                    <div className="olshop">
                                        <p>Buy in our shop via</p>
                                        <Row>
                                            <Col>
                                                <a target="_blank" href="https://shopee.co.id/" className="btn shopee" rel="noreferrer">Shopee</a>
                                            </Col>
                                            <Col>
                                                <a target="_blank" href="https://www.tokopedia.com/" className="btn tokopedia" rel="noreferrer">Tokopedia</a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section>
                    <div className="about-title text-center">
                        <span>Related Products</span>
                        <h4>Smart Care</h4>
                    </div>

                    <div className="product-list">
                        <Row>
                            {Datas.slice(Datas.length - 3).map((data) => (
                                <Col md={4}>
                                    <div className="product-info" key={data.id}>
                                        <a href={`/product/${data.id}`}>
                                            <img src={data.gambar} alt="" />
                                            <div className="product-text">
                                                <h6>{data.nama}</h6>
                                                <span>{rupiah(data.harga)}</span>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                <section id="disqus" className="mt-5">
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </section>
            </Container>
            <Footer />
        </div>
    );
};

export default Product;