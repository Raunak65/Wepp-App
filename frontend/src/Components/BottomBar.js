import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div>
      <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">All Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="books" to="books">
            Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="electronics" to="electronics">
            Electronics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="fashion" to="fashion">
            Fashion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="toysgames" to="toysgames">
            Toys & Games
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="grocery" to="grocery">
            Grocery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="furniture" to="furniture">
            Furniture
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="footwear" to="footwear">
            Footwear
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="travel" to="travel">
            Travel
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
