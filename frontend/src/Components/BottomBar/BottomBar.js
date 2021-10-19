import React from "react";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

export default function BottomBar() {
  return (
    <div>
      <Nav height="small" fill variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="allproducts" to="">
            <MDBIcon fas icon="home" /> All Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="books" to="books">
            <MDBIcon fas icon="book" /> Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="electronics" to="electronics">
            <MDBIcon fas icon="camera" /> Electronics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="fashion" to="fashion">
            <MDBIcon fas icon="tshirt" /> Fashion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="toysgames" to="toysgames">
            <MDBIcon fas icon="gamepad" /> Toys & Games
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="grocery" to="grocery">
            <MDBIcon fas icon="utensils" /> Grocery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="furniture" to="furniture">
            <MDBIcon fas icon="couch" /> Furniture
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="footwear" to="footwear">
            <MDBIcon fas icon="shoe-prints" /> Footwear
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="travel" to="travel">
            <MDBIcon fas icon="plane-departure" /> Travel
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
