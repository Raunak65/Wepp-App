import React from "react";
import {Nav, Navbar,Container} from "react-bootstrap";

export default function BottomBar() {
  return (
    <div>
      <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">All Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Electronics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Fashion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Toys & Games</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Grocery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">Furniture</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7">Footwear</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-8">Travel</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
