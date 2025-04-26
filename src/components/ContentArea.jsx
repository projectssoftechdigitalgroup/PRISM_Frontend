import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { createTheme } from "@mui/material";
import Interview from "./Interview";
import Box from "@mui/material/Box";


const ContentArea = () => {
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
  return (
    <Box className="mt-20">
    <Interview/>
    </Box>
  );
};

export default ContentArea;