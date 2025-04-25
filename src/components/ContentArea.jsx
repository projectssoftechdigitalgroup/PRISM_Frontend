import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { createTheme } from "@mui/material";
// import "../styles/ContentArea.css";

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
    <>
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#E041B1", fontSize: "4rem" }}>Prism</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "-30px" }}>
          Create your digital twin and get personalized recommendations
        </p>
        <p style={{ fontSize: "1rem", marginTop: "-30px" }}>
          <br />
          <span style={{ marginTop: "-10px" }}>
            <i
              style={{
                backgroundColor: "#FFBD45",
                padding: "10px",
                borderRadius: "10px",
              }}
              className="fa-solid fa-robot"
            ></i>
          </span>{" "}
          Life Narrative: Tell me the story of your life, starting from where
          you feel is important. Touch upon key phases like your childhood,
          education, significant relationships (family, friends, partners),
          major life events, and career path. What moments stand out as
          particularly formative or defining?
        </p>
      </div>
      <div>
        <div
          style={{
            marginTop: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "90%",

            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Type your answer here"
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "5px",
                border: `1px solid ${theme.palette.text.primary}`, // Sync with theme
                outline: "none",
                fontSize: "1rem",
                backgroundColor: theme.palette.background.default, // Sync with theme
                color: theme.palette.text.primary, // Sync with theme
              }}
            />
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#E041B1",
                color: "#fff",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                fontSize: "1rem",
                "@media (max-width: 600px)": {
                  padding: "8px 10px", // Adjust padding for smaller screens
                  fontSize: "0.9rem", // Adjust font size for smaller screens
                },
              }}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContentArea;
