import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardLink,
  MDBCardText,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const CardData = ({ product }) => {
  return (
    <MDBCard
      className="bg-image hover-zoom shadow-2-strong rounded"
      style={{ marginBottom: "1.5rem" }}
    >
      <MDBCardImage
        to="https://google.com"
        height="200rem"
        src={product.image}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.price}</MDBCardText>
        <MDBCardLink href="#">Add to Cart</MDBCardLink>
        <MDBCardLink href="#">WishList</MDBCardLink>
        <MDBCardLink href="#">View</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardData;
