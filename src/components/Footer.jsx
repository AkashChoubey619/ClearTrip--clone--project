import React from 'react'
import FooterLogo from '../Assets/FooterLogo'
import { Box, Divider, Typography } from '@mui/material'
import Facebook from '../Assets/FacebookSvg'
import Insta from '../Assets/InstaSvg'
import Twitter from '../Assets/TwitterSvg'
import LinkedIn from '../Assets/LinkedInSvg'
import { Link } from 'react-router-dom'

export default function Fotter() {
  return (
    <div style={{ paddingInline: '5%', width: '100vw', background: 'rgb(232, 231, 231)'}}>
    <div style={{
      display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '80px', paddingInline: '7%'
      , padding: '25px', background: 'rgb(232, 231, 231)',flexWrap:'wrap'
    }}>
      <Box sx={{ marginLeft: '5%', mr: '52px' }}>
        <FooterLogo />
      </Box>
      <Box sx={{ paddingInline: '20px', width: '50%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>
            About Us</Link></p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>Careers</Link></p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>FAQs</Link></p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>Support</Link></p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>Collection</Link></p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>Cleartrip for Business</Link> </p>
          <p><Link style={{ color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500' }}>Gift Cards</Link></p>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '10px', color: '#999' }}>
            © 2024 Cleartrip Pvt. Ltd.· Privacy ·Security ·Terms of Use ·Grievance Redressal
          </Typography>
          <Box sx={{ display: 'flex', gap: '3px' }}>
            <Typography sx={{ fontSize: '12px', color: '#ccc', mr: '2px' }}>Connect</Typography>
            <Facebook />
            <Insta />
            <Twitter />
            <LinkedIn />

          </Box>
        </Box>
        
      </Box>

    </div>
    <Divider sx={{ m: 1 ,width:'90%'}} flexItem />
      <Box sx={{fontSize:'12px',lineHeight:'16px',paddingBlock:2}}>
        <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,mb:2}}>
          Other Links
        </Typography>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'15px',maxWidth:'80%',ml:"-3px"}}>
          <Link style={{color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500'}}>
            <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}} >
              Cheap air tickets
          </Typography></Link>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            Flight tickets
          </Typography >
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            India Hotels
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            Cheap Domestic Air Tickets
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            Domestic Flights
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            Domestic Airlines in India
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            International Air Tickets
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            International Flights
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            International Airlines
          </Typography>
          <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}}>
            Holiday Packages
          </Typography>
        </Box>
      </Box>
      <Box sx={{fontSize:'12px',lineHeight:'16px',paddingBlock:2}}>
        <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,mb:2}}>
        Useful Links
        </Typography>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'15px',maxWidth:'80%',ml:"-3px"}}>
          <Link style={{color: '#1a1a1a', paddingInline: '5px', textDecoration: 'none', fontWeight: '500'}}>
            <Typography sx={{fontSize:'12px',lineHeight:'16px',fontWeight:500,color:'grey','&:hover':{textDecoration:'underline',cursor:'pointer'}}} >
              Myntra
          </Typography></Link>
        </Box>
      </Box>
    </div>
  )
}
