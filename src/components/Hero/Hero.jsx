import React from 'react'
import './hero.css'
import HeroImg from "../../Assets/images/hero-img.png"

import { Container, Row, Col } from 'reactstrap'

const Hero = () => {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg='3' md='3'>
                    <div className="hero_content">
                        <p className="hero_sub">Sharing Joy, One Gift at a Click. </p>

                        <button className="buy_btn">SHOP NOW</button>
                        <Col lg="3" md="3">
                        <div className="hero_img">
                            <img src={HeroImg} alt="" />
                        </div>
                    </Col>
                    </div>
                   
                </Col>
               
            </Row>
        </Container>
    </section>

  )
}

export default Hero
