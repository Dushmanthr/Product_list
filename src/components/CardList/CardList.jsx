import React from 'react';
import Card from '../Card/Card';
import './cardlist.css';

const CardList = ({ products }) => {
  return (
    <div className="card-container">
      <div className="card-row">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
