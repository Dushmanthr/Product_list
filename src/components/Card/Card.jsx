import React from 'react'
import {motion} from "framer-motion"
import './card.css'
import {Col} from 'reactstrap'

import ProductImg1 from "../../Assets/images/phone-01.jpg"

const Card = ({product}) => {
  return (
    <Col lg='3' md='4'>
        <div className="product_item">
        <div className="product_img">
            <motion.img whileHover={{scale:0.9}} src={product.imgUrl} alt="" />
        </div>
        <div className='p-2 product-info'>
        <h3 className="product_name">{product.Product_name}</h3>
        <span >Mobile</span>
        </div>
        
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">Rs. {product.Price}</span>
            <span className="count">{product.availability} Available</span>
        </div>

        
    </div>
    </Col>
  )
}

export default Card
