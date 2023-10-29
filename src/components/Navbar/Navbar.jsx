import React from 'react'
import './navbar.css'



import {Container, Row} from 'reactstrap'
import Logo from "../../Assets/images/eco-logo.png"
import userIcon from "../../Assets/images/user-icon.png"

import { BsBag } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";



const Navbar = () => {
  return (
    <navbar className="navbar">
      <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <div>
              <h1>GiftGalaxy</h1>
              {/* <p>Since 2023</p> */}
            </div>
          </div>
          
          <div className="navigation">
            <ul className="menu">
            <li className="nav_item" >Home</li>
            <li className="nav_item" >Shop</li>
            <li className="nav_item" >Cart</li>
               
            </ul>
          </div>

          <div className="nav_icons">
            <span className="fav_icon">
              <FiHeart/>
              <span className="badge">1</span>
            </span>

            <span className="cart_icon">
            <BsBag/>
            <span className="badge">1</span>
            </span>

            <span><img  src={userIcon} alt="" /></span>
          </div>
          <div className="mobile_menu">
            <span><BiMenu/></span>
          </div>
        </div>
      </Row>
    </Container>
    </navbar>
    
  )
}

export default Navbar
