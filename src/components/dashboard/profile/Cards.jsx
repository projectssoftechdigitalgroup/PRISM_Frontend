import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/book.jpeg"
          alt="book"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            A BOOK
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Books are the source of taking knowledge and are the true friends of those who have a thirst of knowledge.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
