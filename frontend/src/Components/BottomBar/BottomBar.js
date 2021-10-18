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

export default function BottomBar() {
  return (
    <div>
      <Nav height="small" fill variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="allproducts" to="">
            <HomeOutlinedIcon fontSize="small" />
            All Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="books" to="books">
            <LibraryBooksOutlinedIcon fontSize="small" />
            Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="electronics" to="electronics">
            <CameraAltOutlinedIcon fontSize="small" />
            Electronics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="fashion" to="fashion">
            <AccessibilityIcon fontSize="small" />
            Fashion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="toysgames" to="toysgames">
            <GamesOutlinedIcon fontSize="small" /> Toys & Games
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="grocery" to="grocery">
            <LocalGroceryStoreOutlinedIcon fontSize="small" />
            Grocery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="furniture" to="furniture">
            <WeekendOutlinedIcon fontSize="small" />
            Furniture
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="footwear" to="footwear">
            <DirectionsRunIcon fontSize="small" />
            Footwear
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="travel" to="travel">
            <DirectionsCarFilledOutlinedIcon fontSize="small" />
            Travel
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
