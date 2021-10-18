import React from "react";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import GamesOutlinedIcon from "@mui/icons-material/GamesOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
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
