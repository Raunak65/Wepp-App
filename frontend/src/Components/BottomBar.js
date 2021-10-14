import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function BottomBar() {
  return (
    <div>
      <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            <HomeOutlinedIcon fontSize="medium" /> <Box ml={5} />
            All Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="books" to="books">
            <LibraryBooksOutlinedIcon fontSize="medium" /> <Box ml={5} />
            Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="electronics" to="electronics">
            <CameraAltOutlinedIcon fontSize="medium" /> <Box ml={5} />
            Electronics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="fashion" to="fashion">
            <AccessibilityIcon fontSize="medium" /> <Box ml={5} />
            Fashion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="toysgames" to="toysgames">
            <GamesOutlinedIcon fontSize = "medium" /> <Box ml = {5}/>Toys & Games
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="grocery" to="grocery">
            <LocalGroceryStoreOutlinedIcon fontSize="medium" /> <Box ml={5} />
            Grocery
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="furniture" to="furniture">
            <WeekendOutlinedIcon fontSize="medium" /> <Box ml={5} />
            Furniture
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="footwear" to="footwear">
            <DirectionsRunIcon fontSize="medium" /> <Box ml={5} />
            Footwear
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="travel" to="travel">
            <DirectionsCarFilledOutlinedIcon fontSize="medium" /> <Box ml={5} />
            Travel
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
