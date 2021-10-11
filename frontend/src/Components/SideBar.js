import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (left, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem>
          <ListItemText color="primary" primary="Help & Others" />
        </ListItem>
        <Divider />
        <ListItem button key="Saket">
          <ListItemIcon>
            <HistoryOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="My Orders" />
        </ListItem>

        <ListItem button key="Saket">
          <ListItemIcon>
            <SettingsOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        <ListItem button key="Saket">
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="WishList" />
        </ListItem>

        <ListItem button key="Saket">
          <ListItemIcon>
            <SupportAgentOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Customer Support" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key="Saket">
          <ListItemIcon>
            <AccountCircleOutlinedIcon color="error" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>

        <ListItem button key="Saket">
          <ListItemIcon>
            <SettingsOutlinedIcon color="error" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        // edge="start"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuOutlinedIcon
          fontSize="tiny"
          onClick={toggleDrawer("left", true)}
        />
      </IconButton>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
