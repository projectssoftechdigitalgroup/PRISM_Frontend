import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Progress({ progress }) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    );
  }
  
