import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { CardMedia } from '@mui/material';
import Interview from './Interview';

const cards = [
  {
    id: 1,
    title: 'Travelling',
    image:'/travel.jpeg'
  },
  {
    id: 2,
    title: 'Books',
    image:'/book.jpeg'
  },
  {
    id: 3,
    title: 'Restaurants',
    image:'/restaurant.jpeg'
  },
];

function CategoryCard() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  return (
    <>
    {!selectedCard ?
    <>
        <p
        className="text-lg md:text-2xl mt-2.5 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-10"
        >
    Choose the Category to proceed for interview
  </p>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => {
              console.log("Card clicked:", card.title);
              setSelectedCard(card);
            }}
            
         
          >
            <CardMedia
          sx={{ height: 140 }}
          image={card.image}
          title={card.title}
          
        />
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
    : 
      <Box mt={4}>
        <Interview title={selectedCard.title} />
      </Box>
    }
    </>
  );
}

export default CategoryCard;
