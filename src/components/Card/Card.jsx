import React from 'react'
import motion from "framer-motion"
import './card.css'
import {Col} from 'reactstrap'

import ProductImg1 from "../../Assets/images/phone-01.jpg"

const Card = () => {
  return (
    <Col lg='3' md='4'>
        <div className="product_item">
        <div className="product_img">
            <img src={ProductImg1} alt="" />
        </div>
        <div className='p-2 product-info'>
        <h3 className="product_name">Galaxy S</h3>
        <span >Mobile</span>
        </div>
        
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">Rs.48990</span>
            <span className="count">12 Available</span>
        </div>

        
    </div>
    </Col>
  )
}

export default Card
