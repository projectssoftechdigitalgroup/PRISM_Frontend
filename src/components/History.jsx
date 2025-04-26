import React from 'react';
import { Box, Typography, Paper, useTheme, List, ListItem, ListItemText } from '@mui/material';

const History = () => {
  const theme = useTheme();

  const messages = [
    { id: 1, sender: 'user', text: 'Hello, how are you?' },
    { id: 2, sender: 'bot', text: 'I am fine, thank you! How can I assist you today?' },
    { id: 3, sender: 'user', text: 'Tell me about MUI.' },
    { id: 4, sender: 'bot', text: 'MUI is a popular React UI framework for building responsive and accessible web applications.' },
  ];

  return (
    <Box
      sx={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: 'calc(100vh - 100px)',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Chat History
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <ListItemText
                primary={message.text}
                sx={{
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                  backgroundColor:
                    message.sender === 'user'
                      ? '#8200DB'
                      : theme.palette.mode === 'dark'
                        ? theme.palette.grey[700]
                        : theme.palette.grey[300],
                  color: message.sender === 'user' ? '#FFFFFF' : theme.palette.text.primary,
                  borderRadius: 2,
                  padding: 1,
                  maxWidth: '75%',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default History;