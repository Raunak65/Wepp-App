// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import SideBar from "./SideBar";
// import BottomBar from "./BottomBar/BottomBar";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "40%",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "auto",
//     },
//   },
// }));

// export default function NavigationBar() {
//   return (
//     <>
//       <React.Fragment>
//         <Box sx={{ flexGrow: 1 }}>
//           <AppBar position="static">
//             <Toolbar>
//               <SideBar />
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ display: { xs: "none", sm: "block" } }}
//               >
//                 Wepp
//               </Typography>
//               <Box sx={{ flexGrow: 1 }} />
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search"
//                   inputProps={{ "aria-label": "search" }}
//                 />
//               </Search>
//               <Box sx={{ flexGrow: 1 }} />
//               <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                 <ShoppingCartOutlinedIcon />
//                 Cart
//               </Box>
//               <Box ml={5} />
//               <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                 <LogoutOutlinedIcon />
//                 Logout
//               </Box>
//             </Toolbar>
//           </AppBar>
//         </Box>
//       </React.Fragment>

//       <React.Fragment>
//         <BottomBar />
//       </React.Fragment>
//     </>
//   );
// }

import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import BottomBar from "./BottomBar/BottomBar";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <React.Fragment>
        <MDBNavbar  position="static" expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Wepp</MDBNavbarBrand>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <form className="d-flex input-group w-50">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type query"
                  aria-label="Search"
                />
                <MDBBtn color="primary">Search</MDBBtn>
              </form>
            </MDBCollapse>
          </MDBContainer>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link">
                    <MDBIcon fas icon="user-circle" size="lg" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>My Profile</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>WishList</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Something else here</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </React.Fragment>
      
      <React.Fragment>
        <BottomBar />
      </React.Fragment>
    </>
  );
}
