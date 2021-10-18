import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardLink,
  MDBCardText,
} from "mdb-react-ui-kit";

const CardData = ({ product }) => {
  return (
    <MDBCard className="bg-image hover-zoom shadow-2-strong rounded" style={{marginBottom:'1.5rem'}}>
      <MDBCardImage
        height="200rem"
        src={product.image}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
        <MDBCardLink href="#">I would Love to buy</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CardData;
