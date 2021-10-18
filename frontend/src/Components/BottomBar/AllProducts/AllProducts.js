import React from 'react';
import Carousel from './Carousel';
import CardDisplayAllProducts from "./CardAllProducts/CardDisplayAllProducts";  

function AllProducts() {
    return (
      <div>
        <Carousel />
        <h1>All Products</h1>
        <CardDisplayAllProducts />
      </div>
    );
}

export default AllProducts;

//  ../ means just outside the folder or just above level
