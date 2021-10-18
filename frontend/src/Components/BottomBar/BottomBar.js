import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
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

// import React, { useState } from "react";
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
// } from "mdb-react-ui-kit";

// export default function App() {
//   const [justifyActive, setJustifyActive] = useState("tab1");

//   const handleJustifyClick = (value: string) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };

//   return (
//     <>
//       <MDBTabs pills justify className="mb-3">
//         <MDBTabsItem>
//           <MDBTabsLink
//             onClick={() => handleJustifyClick("tab1")}
//             active={justifyActive === "tab1"}
//           >
//             All Products
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink
//             onClick={() => handleJustifyClick("tab2")}
//             active={justifyActive === "tab2"}
//           >
//             Very very very very long link
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink
//             onClick={() => handleJustifyClick("tab3")}
//             active={justifyActive === "tab3"}
//           >
//             Another link
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>

//       <MDBTabsContent>
//         <MDBTabsPane show={justifyActive === "tab1"}>Tab 1 content</MDBTabsPane>
//         <MDBTabsPane show={justifyActive === "tab2"}>Tab 2 content</MDBTabsPane>
//         <MDBTabsPane show={justifyActive === "tab3"}>Tab 3 content</MDBTabsPane>
//       </MDBTabsContent>
//     </>
//   );
// }
