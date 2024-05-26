import React, { useEffect } from 'react'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {usePeopleContext} from '../Context/MainContext'
import ListItemIcon from '@mui/material/ListItemIcon';
import FlightFilledIcon from '../Assets/plane.png'
import FlightIcon from '../Assets/plane (1).png'
import HotelOutline from '../Assets/hotel.png'
import HotelFilled from '../Assets/hotel1.png'
import OfferOutline from '../Assets/discount.png'
import TripOutline from '../Assets/bag.png'
import StarOutline from '../Assets/star.png'
import Support from '../Assets/support.png'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import BusOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
export default function LeftNavigation() {
  const { navigate, setNavigate } = usePeopleContext();
    const handleNavigation = (destination) => {
    setNavigate(destination);
  };
  console.log(navigate,'outside');


  return (
    <div style={{display:'flex',alignItems:'center',flexBasis:'16.66667%',padding:8,marginTop:'-24px'}}>
      <Box>
      <MenuList>
      <div  style={{textDecoration:'none',color:'black'}}>
        <MenuItem component={Link} to="/" style={navigate==='flight'?{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px',background:'#d6e8fc',color:'#36c'}
        :{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px',color:'black'}} onClick={()=>handleNavigation('flight')}>
          <ListItemIcon >
            {navigate==='flight'?<img src={FlightFilledIcon} style={{ width: '22px', height: '22px'}}alt='Flight' fontSize="small" />:
            <img src={FlightIcon} style={{ width: '20px', height: '20px'}}alt='Flight' fontSize="small" />}
          </ListItemIcon>
          <span style={{fontWeight:500,}}>Flights</span>
        </MenuItem></div>
        
        <div onClick={()=>handleNavigation('hotel')} style={{textDecoration:'none',color:'black'}}>
          <MenuItem component={Link} to="/hotel" style={navigate==='hotel'?{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px',background:'#d6e8fc',color:'#36c'}
        :{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}}>
          <ListItemIcon>
          {navigate==='hotel'?<img src={HotelFilled} style={{ width: '22px', height: '22px'}}alt='Flight' fontSize="small" />:
          <img src={HotelOutline} style={{ width: '20px', height: '20px'}}alt='Flight' fontSize="small" />}
          </ListItemIcon>
          <span style={{fontWeight:500}}>Hotels</span>
        </MenuItem>
        </div>

        <div  onClick={()=>handleNavigation('bus')} style={{textDecoration:'none',color:'black'}}>
          <MenuItem component={Link} to="/bus" style={navigate==='bus'?{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px',background:'#d6e8fc',color:'#36c'}
        :{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}} >
          <ListItemIcon>
          {navigate==='bus'?<DirectionsBusIcon style={{color:'#36c'}}/>:<BusOutlinedIcon fontSize="small" />}
          </ListItemIcon>
          <span style={{fontWeight:500}}>Bus</span>
        </MenuItem></div>

        <MenuItem component={Link} to="/offers" style={{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}} >
          <ListItemIcon>
          <img src={OfferOutline} style={{ width: '20px', height: '20px'}}alt='Flight' fontSize="small" />
          </ListItemIcon>
          <span style={{fontWeight:500}}>Offers</span>
        </MenuItem>
        
        <a style={{textDecoration:"none",color:'black'}} href='https://www.cleartrip.com/support' target='blank'>
        <MenuItem style={{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}}>
          <ListItemIcon>
          <img src={TripOutline} style={{ width: '20px', height: '20px'}}alt='Trip' fontSize="small" />
          </ListItemIcon>
          <span style={{fontWeight:500}}>My trips</span>
        </MenuItem>
        </a>
        <a style={{textDecoration:"none",color:'black'}} href='https://business.cleartrip.com' target='blank'>
        <MenuItem style={{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}}>
          <ListItemIcon>
          <img src={StarOutline} style={{ width: '20px', height: '20px'}}alt='Star' fontSize="small" />
          </ListItemIcon>
          <span style={{fontWeight:500}}>Cleartrip for business</span>
        </MenuItem></a>

        <a style={{textDecoration:"none",color:'black'}} href='https://www.cleartrip.com/support' target='blank'>
          <MenuItem style={{marginBottom:'8px',paddingBlock:'10px',borderRadius:'8px'}}>
          <ListItemIcon>
          <img src={Support} style={{ width: '20px', height: '20px'}}alt='Support' fontSize="small" />
          </ListItemIcon>
          <span style={{fontWeight:500}}>Support</span>
        </MenuItem></a>
        
      </MenuList>
        </Box>
      
    </div>
  )
}
