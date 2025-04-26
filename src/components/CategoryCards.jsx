import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';
import CategoryRecommendations from './CategoryRecommendations';
import { useState } from 'react';
const cards = [
  {
    id: 1,
    title: 'Hotels',
    image:'/restaurant.jpeg'
  },
  {
    id: 2,
    title: 'Books',
    image:'/book.jpeg'
  },
  {
    id: 3,
    title: 'Travelling',
    image:'/travel.jpeg'
  },
];

function CategoryCard() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  return (
    <>
    {!selectedCard ?
    <>
        {/* <p
        className="text-lg md:text-2xl mt-2.5 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-10"
        >
    Choose the Category to proceed for interview
  </p> */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        width: '100%',
        padding: 4,
        boxSizing: 'border-box',

      }}
      className="md:mt-[10%]"
      >
      
      {cards.map((card, index) => (
        <Card key={card.id} sx={{
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          overflow: 'hidden',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        }}>
          <CardActionArea
          onClick= {() =>setSelectedCard(card)}>
            <CardMedia
          sx={{ height: 130,borderRadius:"50%",objectFit:"cover" }}
          image={card.image}
          title={card.title}
          
        />
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
: 
<Box mt={4}>

  <CategoryRecommendations title={selectedCard?.title ||"Unknown"} image={selectedCard?.image} onBack={() => setSelectedCard(null)}/>
  </Box> 
}
</>
  );
}

export default CategoryCard;
