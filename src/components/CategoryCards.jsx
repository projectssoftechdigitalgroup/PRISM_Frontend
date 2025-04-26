import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, CardMedia } from "@mui/material";
import RecommendationTab from "./RecommendationTab";

const cards = [
  {
    id: 1,
    title: "Food & Dining",
    image: "/restaurant.jpeg",
  },
  {
    id: 2,
    title: "Movies & TV",
    image: "/movies.png",
  },
  {
    id: 3,
    title: "Travelling",
    image: "/travel.jpeg",
  },
];

function CategoryCard() {
  // const [screen, setScreen] = React.useState(true);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          width: "100%",
          padding: 4,
          boxSizing: "border-box",
        }}
        className="md:mt-[10%]"
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            sx={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ height: 130, borderRadius: "50%", objectFit: "cover" }}
                image={card.image}
                title={card.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      {/* <button onClick={() => setScreen(false)}>False</button> */}
    </>
  );
}

export default CategoryCard;
