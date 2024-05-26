import { Box, Typography, Button, Stack, Paper, ButtonGroup, MenuItem, Menu, Divider, Grid } from '@mui/material'
import DatePicker from 'react-datepicker';
import Calender from '../Assets/calendar.png';
import RightSection from '../components/RightSectionBus';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import BusIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import 'react-datepicker/dist/react-datepicker.css';
import RightLeft from '../Assets/right-left (1).png';
import Footer from "../components/Footer";
import './StylesPage.css'
import Banner from '../Assets/busImg/thinstrip_Buses.webp'
import React, { useState } from 'react'
import LeftNavigation from '../components/LeftNavigation';
import MiddleContentBus from '../components/MiddleContentBus'
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router';


export default function SearchForBus() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorPerson, setAnchorPerson] = useState(null);
  const [presentDate, setPresentDate] = useState(new Date());
  const [rotationAngle, setRotationAngle] = useState(0);
  const navigate=useNavigate()

  const handleDateChange = (date) => {
    setPresentDate(date);
  };


  const handleBoxClick = () => {
    const newRotationAngle = rotationAngle + 180; // Increase the rotation angle by 360 degrees
    setRotationAngle(newRotationAngle);
  };

  return (
    <>
    <Navigation/>
    <Box sx={{ maxWidth: '100%', paddingInline: '20px' }}>
      <Grid container spacing={5} justifyContent={'center'} mt={1} gap={'10px'}>
        <Grid item minWidth={'255px'} xs={12} sm={2}>
          <LeftNavigation />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: 500, mb: 1 }} variant='h4' component={'h4'}>Search buses</Typography>
            <Typography sx={{ fontSize: '16px', mb: 4, ml: 1 }} variant='body2'>Enjoy hassle free bookings with Cleartrip</Typography>
            <Paper sx={{ p: '25px', borderRadius: '12px', border: '0.5 px solid light grey' }} elevation={3}>
              <form>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%', m: 1, mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mr: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, borderRadius: '9px 0px 0px 9px', position: 'relative' }}
                      border={'1px solid lightgrey'}>
                      <BusIcon style={{ marginLeft: '20px', color: 'grey' }} />
                      <input type='text'
                        style={{
                          width: '100%', padding: '15px',
                          boxSizing: 'border-box', fontSize: '16px',
                          border: 'none', outline: 'none', borderRadius: '9px 0px 0px 9px'
                        }}
                        placeholder='Leaves from..?' />
                    </Box>
                    <Box
                      sx={{
                        height: '23px', width: '23px', zIndex: 5, marginLeft: '-17px', padding: '3px',
                        background: 'white', border: '1px solid black', borderRadius: '20px',
                        cursor: 'pointer', // Add cursor pointer to indicate it's clickable
                        transition: 'transform 0.5s', // Add transition for smooth rotation
                        transform: `rotate(${rotationAngle}deg)`
                      }} onClick={handleBoxClick}>
                      <img src={RightLeft} alt='swap' style={{ width: '100%' }} />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, ml: '-17px', borderRadius: '0px 9px 9px 0px' }}
                      border={'1px solid lightgrey'}>
                      <LocationIcon style={{ marginLeft: '28px', color: 'grey' }} />
                      <input type='text' style={{
                        width: '100%',
                        boxSizing: 'border-box', padding: '15px', fontSize: '16px',
                        border: 'none', outline: 'none', borderRadius: '0px 9px 9px 0px'
                      }} placeholder='Going to..?' />
                    </Box>

                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px',margin:'30px 0px 25px 8px'}}>
                  <Box className='dateBox' sx={{ display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={Calender} alt="calendar" style={{ height: '19px', width: '18px', marginLeft: '10px' }} />
                    <DatePicker
                      id="presentDateSingle"
                      selected={presentDate}
                      value={presentDate}
                      onChange={handleDateChange}
                      dateFormat="E, MMM d"
                      placeholderText="Select date"
                      className="custom-datepicker" // Add your custom class for styling
                    />
                  </Box>
                  <Button onClick={()=>navigate('/allAvailableBuses')} type='submit'
                    style={{
                      fontWeight: 500, fontSize: '15px', height: '50px', p: '8px 12px', background: '#ff4f17', textTransform: 'none',
                      color: 'white', borderRadius: '8px', width: '95%', maxWidth: '100%', ':hover': { background: '#c56226' }
                    }}
                  >
                    Search Hotels
                  </Button>
                </Box>

              </form>
            </Paper>


            <Box sx={{ my: 4 }}>
              <Grid item m={0} mt={'15px'} xs={12} container spacing={2}>
                <img src={Banner} style={{borderRadius:'8px'}} width={'100%'} alt='banner' />
              </Grid>
            </Box>
          </Box>

        </Grid>
        <Grid item xs={false} sm={3}>
          <RightSection />
        </Grid>
        <Box sx={{ padding: '10px', marginLeft: '250px' }}>
          <MiddleContentBus/>
        </Box>
        <Box mt={'-28px'}>
          <Footer />
        </Box>
      </Grid>
    </Box >
    </>
  )
}
