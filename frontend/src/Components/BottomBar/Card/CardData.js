import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardLink,
} from "mdb-react-ui-kit";

const CardData = ({ product }) => {
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardImage src={product.image} position="top" alt="..." />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
        <MDBCardLink href="#">Add to Cart</MDBCardLink>
        <MDBCardLink href="#">WishList</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardData;
