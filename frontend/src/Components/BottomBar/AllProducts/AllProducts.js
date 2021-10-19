import React from 'react';
import '../../styles.css';
import Carousel from './Carousel';
import CardDisplayAllProducts from "./CardAllProducts/CardDisplayAllProducts";  

function AllProducts() {
    return (
      <div>
        <Carousel />
        <div className="header-section">
          <h2>All Products</h2>
        </div>
        <CardDisplayAllProducts />
      </div>
    );
}

export default AllProducts;

//  ../ means just outside the folder or just above level
