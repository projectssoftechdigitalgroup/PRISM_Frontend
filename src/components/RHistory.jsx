import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import RecommendationTable from './RecommendationTable';
import { Box } from '@mui/material';

const RHistory = ({onBack}) => {
  return (
    <Box sx={{width: '100%',
      padding: 4,
      boxSizing: 'border-box'}} className="mt-10">
      <IoArrowBackOutline className='text-3xl cursor-pointer ' onClick={onBack}/>
      <RecommendationTable />
    </Box>
  )
}

export default RHistory
