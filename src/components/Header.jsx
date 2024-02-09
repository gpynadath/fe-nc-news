import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/header.css";
import { AccountCircle, Adb, Menu } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" id="logo"> NC News</Link>
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 5, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/articles">
                <button id="headerLinks">Articles</button>
              </Link>
              <Link to="/topics">
                <button id="headerLinks">Topics</button>
              </Link>
              <Link to="/users">
                <button id="headerLinks">Users</button>
              </Link>
            </Typography>
            <Menu
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              onClick={() => {
                setDrawer(!drawer);
              }}
            />
            <Drawer
              open={drawer}
              anchor="right"
              onClose={() => {
                setDrawer(false);
              }}
            >
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <Link to="/articles">
                      <button id="headerLinks">Articles</button>
                    </Link>
                    <Link to="/topics">
                      <button id="headerLinks">Topics</button>
                    </Link>
                    <Link to="/users">
                      <button id="headerLinks">Users</button>
                    </Link>
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Drawer>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <AccountCircle />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
