import React from 'react'
import "./hero.css"

import { Container, Row, Col } from 'reactstrap'
import HeroImg from "../../Assets/images/hero-img.png"

const Home_div = () => {

    const year = new Date().getFullYear()
    return (
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                            <p className="hero_subtitle">
                                Trending Product in {year}
                            </p>
                            <h2>Make Your Interior with more Minimalist </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis quae adipisci itaque voluptate veniam esse.</p>

                            <button className="buy_btn">SHOP NOW</button>
                        </div>
                    </Col>

                   { <Col lg="6" md="6">
                        <div className="hero_img">
                            <img src={HeroImg} alt="" />
                        </div>
                    </Col>}
                </Row>
            </Container>
        </section>
    )
}

export default Home_div
