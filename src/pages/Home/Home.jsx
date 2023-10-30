import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Cardlist from '../../components/CardList/CardList'


const Home = () => {
  return (
    <div>
      <Navbar/>

      <Hero/>

      <section className="our_products">
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className="section_title">Our Products</h2>
                </Col>
                <Cardlist/>
            </Row>
        </Container>
      </section>
    </div>
    
  )
}

export default Home
