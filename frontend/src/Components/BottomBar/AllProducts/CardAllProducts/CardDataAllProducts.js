import React from "react";
import {Link} from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardLink,
  MDBCardText,
} from "mdb-react-ui-kit";

const CardDataAllProducts = ({ product }) => {
  return (
    <MDBCard
      className="bg-image hover-zoom shadow-2-strong rounded"
      style={{ marginBottom: "1.5rem" }}
    >
      <MDBCardImage
        height="200rem"
        src={product.image}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
        <Link to={product.destination} class="btn btn-primary stretched-link">
          I love to buy {product.title}
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardDataAllProducts;
