import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RecommendationTab = () => {
  const theme = useTheme();

  const recommendations = [
    {
      image: "./book.jpeg",
      description: "This is the first recommendation description.",
    },
    {
      image: "./travel.jpeg",
      description: "This is the second recommendation description.",
    },
    {
      image: "./restaurant.jpeg",
      description: "This is the third recommendation description.",
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "25px",
        padding: "20px",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "100vh", // Set fixed height for the container
        overflowY: "auto", // Enable vertical scrolling
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: `${theme.palette.text.primary} ${theme.palette.background.paper}`, // For Firefox
        "&::-webkit-scrollbar": {
          width: "8px", // Scrollbar width
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.text.primary, // Scrollbar thumb color
          borderRadius: "10px", // Rounded scrollbar thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.background.paper, // Scrollbar track color
        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: theme.palette.text.primary,
        }}
      >
        Recommendation
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {recommendations.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: theme.palette.background.paper,
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <img
              src={item.image}
              alt={`Recommendation ${index + 1}`}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                textAlign: "center",
                color: theme.palette.text.primary,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecommendationTab;
