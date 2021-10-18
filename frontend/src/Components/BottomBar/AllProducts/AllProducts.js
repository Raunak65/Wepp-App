import React from 'react';
import Carousel from './Carousel';
import CardDisplay from "../Card/CardDisplay";  

function AllProducts() {
    return (
      <div>
        <Carousel/>
        <h1>All Products</h1>
        <CardDisplay/>
      </div>
    );
}

export default AllProducts;

//  ../ means just outside the folder or just above level
