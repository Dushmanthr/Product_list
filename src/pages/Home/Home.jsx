import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Cardlist from '../../components/CardList/CardList';
import InfiniteScroll from 'react-infinite-scroll-component';

import Products from '../../Assets/data/products.json';

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [showMore, setShowMore] = useState(8);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setProductData(Products);
  }, []);

  const loadMoreData = () => {
    if (showMore >= productData.length) {
      setHasMore(false); // No more data to load
    } else {
      setTimeout(() => {
        setShowMore(showMore + 1); // Load one more card at a time
      }, 600); // Simulate a delay to show loading
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="our_products">
        <Container>
          <Row className="card-row">
            <Col lg="12" className="text-center">
              <h2 className="section_title">Our Products</h2>
            </Col>
            <InfiniteScroll
              dataLength={showMore}
              next={loadMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
            >
              <Cardlist products={productData.slice(0, showMore)} />
            </InfiniteScroll>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
