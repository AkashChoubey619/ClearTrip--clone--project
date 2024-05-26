import React from 'react'
import Navigation from '../components/Navigation'
import { Box, Typography } from '@mui/material'
import { Title } from '@mui/icons-material'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function NotFound() {
  return (
    <div style={{height:'100vh'}}>
      <Navigation/>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:3,height:'100%'}}>
        <Box sx={{textAlign:'center',color:'grey'}}>
            <ReportProblemIcon sx={{fontSize:'7.2rem',mb:1}}/>
            <Typography sx={{fontWeight:500,fontSize:'16px'}} >404 not found</Typography>
        </Box>
      </Box>
    </div>
  )
}
