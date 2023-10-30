import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Cardlist from '../../components/CardList/CardList'

import Products from '../../Assets/data/products.json'




const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    setProductData(Products);
  }, []);
 
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
                <Cardlist products={productData}/>
            </Row>
        </Container>
      </section>
    </div>
    
  )
}

export default Home
