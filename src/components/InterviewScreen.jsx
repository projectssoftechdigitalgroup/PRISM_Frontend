import React, { useState } from "react";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../assets/prism-logo.png"; // Add your logo here
import ContentArea from "./ContentArea";
import PromptArea from "./PromptArea";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: theme.palette.mode === "dark" ? "#0E1117" : "#f5f5f5",
  color: theme.palette.mode === "dark" ? "#f5f5f5" : "#0E1117",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#0E1117" : "#f5f5f5",
  color: theme.palette.mode === "dark" ? "#f5f5f5" : "#0E1117",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0, // Completely close the sidebar
  overflow: "hidden", // Ensure no scrollbars
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.mode === "dark" ? "#E041B1" : "#6200ea",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function InterviewScreen() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#0E1117" : "#f5f5f5",
        paper: darkMode ? "#262730" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#f5f5f5" : "#0E1117",
        secondary: darkMode ? "#d1d1d1" : "#4f4f4f",
      },
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          // overflowY: "auto", // Enable vertical scrolling
        }}
      >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Interview Screen
            </Typography>
            <IconButton
              color="inherit"
              aria-label="toggle dark mode"
              onClick={toggleDarkMode}
              edge="end"
              sx={{ marginLeft: "auto" }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              sx={{
                color: theme.palette.text.primary,
                marginLeft: "auto",
              }}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 2,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: open ? "150px" : "80px", // Larger logo size
                transition: "width 0.3s ease",
                marginBottom: "20px", // Add spacing below the logo
              }}
            />
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: "#E041B1",
                  color: "#fff",
                  borderRadius: "8px",
                  margin: "10px",
                  "&:hover": {
                    backgroundColor: "#c0359b",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <StarIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Recommendation"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: "#E041B1",
                  color: "#fff",
                  borderRadius: "8px",
                  margin: "10px",
                  "&:hover": {
                    backgroundColor: "#c0359b",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Profile"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            color: theme.palette.text.primary,
            // height: "450vh", // Increase the height of the main content
          }}
        >
          {/* <DrawerHeader /> */}
          <ContentArea theme={theme} />
          <PromptArea  theme={theme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
