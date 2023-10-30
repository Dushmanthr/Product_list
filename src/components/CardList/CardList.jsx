import React from 'react'
import Card from '../Card/Card'

const Cardlist = ({products}) => {
  return (
    <>
    {products.map((product) =>(
        <Card key={product.id} product={product}/>
    ))}
       
      
    </>
  )
}

export default Cardlist
