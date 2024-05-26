import { Box, Typography, Button, Stack, Paper, FormControl, MenuItem, Menu, Divider, Grid } from '@mui/material'
import { Select, InputLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import Calender from '../Assets/calendar.png';
import RightSection from '../components/RightSectionHotel';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../components/Footer";
import './StylesPage.css'
import Banner from '../Assets/hotelBanner.jpg'
import React, { useState } from 'react'
import LeftNavigation from '../components/LeftNavigation';
import MiddleContentHotel from '../components/MiddleContentHotel';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { options } from '../Store';
import PinDropIcon from '@mui/icons-material/PinDrop';



export default function SearchForHotel() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorPerson, setAnchorPerson] = useState(null);
  const [presentDate, setPresentDate] = useState(new Date());
  const [adultCount, setAdultCount] = useState("1");
  const tomorrow = new Date(); // Create a new Date object
  tomorrow.setDate(tomorrow.getDate() + 1); // Adjust it to represent tomorrow's date 
  const [tomorrowDate, setTomorrowDate] = useState(tomorrow); // Set tomorrow's date as initial state


  const handleDateChange = (date) => {
    setPresentDate(date);
  };

  const handleDateChangeTomorrow = (date) => {
    setTomorrowDate(date);
  };

  const handleOpenPerson = (event) => {
    setAnchorPerson(event.currentTarget);
  };

  const handleClosePerson = () => {
    setAnchorPerson(null);
  };
  const [selectedOption, setSelectedOption] = useState('');
  const [displaySelectedOption, setDisplaySelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setDisplaySelectedOption(option.label);
    setShowOptions(false);
    console.log('Selected:', option);
  };

  const handleSearch = () => {
    if (selectedOption) {
      const searchData = [selectedOption, presentDate, tomorrowDate];
      localStorage.setItem("searchHotel", JSON.stringify(searchData));
      navigate('/searchedHotel');
    }
  }

  return (
    <>
      <Navigation />
      <Box sx={{ maxWidth: '100%', paddingInline: '20px' }}>
        <Grid container spacing={5} justifyContent={'center'} mt={1} gap={'10px'}>
          <Grid item minWidth={'255px'} xs={12} sm={2}>
            <LeftNavigation />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500, mb: 1 }} variant='h4' component={'h4'}>Search Hotels</Typography>
              <Typography sx={{ fontSize: '16px', mb: 4, ml: 1 }} variant='body2'>Enjoy hassle free bookings with Cleartrip</Typography>
              <Paper sx={{ p: '25px', borderRadius: '12px', border: '0.5 px solid light grey' }} elevation={3}>
                <form>
                  <Box sx={{
                    width: '100%', boxShadow: '0px 0px 3px grey', borderRadius: '8px', marginBlock: '15px'
                    , display: 'flex', alignItems: 'center', gap: '8px', paddingInline: '10px', boxSizing: 'border-box', height: '56px'
                  }}>
                    <LocationIcon sx={{ width: '26px', height: '26px', color: 'grey' }} />
                    <div style={{ position: 'relative', width: '100%' }}>
                      <button
                        type='button'
                        onClick={() => setShowOptions(!showOptions)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: 'none',
                          borderRadius: 'none',
                          fontSize: '16px', fontWeight: 600,
                          backgroundColor: '#fff',
                          textAlign: 'left', letterSpacing: '1px'
                        }}
                      >
                        <Typography sx={{
                          fontSize: '17px', fontWeight: 500,
                          backgroundColor: '#fff',
                          textAlign: 'left',
                          letterSpacing: '1px', color: 'rgb(26, 26, 26)'
                        }}>
                          {selectedOption ? displaySelectedOption : 'Enter locality,landmark or hotel'}</Typography>
                      </button>
                      {showOptions && (
                        <div
                          className='optionContainer'
                        >
                          {options.map((option) => (
                            <div
                              key={option.value}
                              onClick={() => handleSelect(option)}
                              className='hotelOption'
                              style={{
                                display: 'flex', alignItems: 'center',
                                padding: '14px 12px', gap: '12px',
                                cursor: 'pointer',
                              }}
                            >
                              <Box>
                                <PinDropIcon sx={{ color: 'grey' }} />
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Box>
                                  <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>{option.label}</Typography>
                                  <Typography sx={{ color: 'grey', fontWeight: 500, fontSize: '12px' }}>{option.location}</Typography>
                                </Box>
                                <Typography sx={{ color: 'grey', fontWeight: 500, fontSize: '14px', pr: 1 }}>India</Typography>
                              </Box>

                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px', flexWrap: 'wrap', mt: '30px', mb: '25px' }}>
                    <Box className='dateBox' sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={Calender} alt="calendar" style={{ height: '19px', width: '18px', marginLeft: '10px' }} />
                      <DatePicker
                        id="presentDateSingle"
                        selected={presentDate}
                        value={presentDate}
                        onChange={handleDateChange}
                        dateFormat="E, MMM d"
                        placeholderText="Select date"
                        className="custom-datepicker" // Add custom class for styling
                      />
                      <Divider sx={{ height: '48', marginTop: '4px' }} orientation='vertical' flexItem />
                      <DatePicker
                        id="presentDateRound"
                        selected={tomorrowDate}
                        onChange={handleDateChangeTomorrow}
                        dateFormat="E, MMM d"
                        placeholderText="Return"
                        className="custom-datepicker" // Add custom class for styling
                      />
                    </Box>
                    <Box className='dateBox'>
                      <Button type='button'
                        onClick={handleOpenPerson}
                        sx={{ minWidth: 100, m: 0, border: 'none', textTransform: 'none', color: 'black', paddingBlock: '12px', pr: '14px' }}

                      >
                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                          <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', fontWeight: 500 }}
                          ><PersonIcon style={{ marginTop: '-4px', color: '#1a1a1a', marginRight: 8 }} />1 Room {adultCount} Adult
                          </Typography>
                        </Box>
                      </Button>
                      <Menu
                        anchorEl={anchorPerson}
                        open={Boolean(anchorPerson)}
                        onClose={handleClosePerson}
                        PaperProps={{ sx: { boxSizing: 'border-box', borderRadius: '9px' } }}
                      >
                        <Box sx={{ p: "6px 0px", borderRadius: '9px', boxSizing: 'border-box' }}>
                          <Box className='selectRoom' minWidtht={'170px'} width={'250px'}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: '6px', paddingInline: '10px', color: 'grey' }}>Quick select</Typography>
                            <Box sx={{ lineHeight: '24px' }} >
                              <Typography sx={{ fontWeight: 500, p: '10px', fontSize: '16px', color: 'black', width: '100%', cursor: 'pointer', '&:hover': { background: '#36c', color: 'white' } }}>
                                1 Room 1 Adult
                              </Typography>
                            </Box>
                            <Box sx={{ lineHeight: '24px' }}>
                              <Typography sx={{ fontWeight: 500, p: '10px', fontSize: '16px', color: 'black', width: '100%', cursor: 'pointer', '&:hover': { background: '#36c', color: 'white' } }}>
                                1 Room 2 Adults
                              </Typography>
                            </Box>
                            <Box sx={{ lineHeight: '24px' }}>
                              <Typography sx={{ fontWeight: 500, p: '10px', fontSize: '16px', color: 'black', width: '100%', cursor: 'pointer', '&:hover': { background: '#36c', color: 'white' } }}>
                                2 Room 4 Adults
                              </Typography>
                            </Box>
                            <Box sx={{ lineHeight: '24px' }}>
                              <Typography sx={{ fontWeight: 500, p: '10px 10px', fontSize: '16px', color: 'black', width: '100%', cursor: 'pointer', '&:hover': { background: '#36c', color: 'white' } }}>
                                1 Room 1 Adult 1 child
                              </Typography>
                            </Box>
                          </Box>
                          <Typography sx={{ p: '10px 12px', cursor: 'pointer', color: '#36c', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                            Add more option and travellers
                          </Typography>
                        </Box>
                      </Menu>
                    </Box>
                  </Box>
                  <Box sx={{
                    borderRadius: '8px', justifyContent: 'flex-end'
                    , display: 'flex', alignItems: 'center', boxSizing: 'border-box'
                  }}>
                    <Button type='button' onClick={handleSearch}
                      sx={{
                        fontWeight: 500, fontSize: '15px', height: '52px', p: '8px 12px', background: '#ff4f17', textTransform: 'none',
                        color: 'white', borderRadius: '8px', width: '186px', marginBlock: '22px', minWidth: '130px', ':hover': { background: '#c56226' }
                      }}
                    >Search Hotels</Button>
                  </Box>

                </form>
              </Paper>


              <Box sx={{ my: 4 }}>
                <Grid item m={0} mt={'15px'} xs={12} container spacing={2}>
                  <img src={Banner} width={'100%'} alt='banner' />
                </Grid>
              </Box>
            </Box>

          </Grid>
          <Grid item xs={false} sm={3}>
            <RightSection />
          </Grid>
          <Box sx={{ padding: '10px', marginLeft: '250px' }}>
            <MiddleContentHotel />
          </Box>
          <Box mt={'-28px'}>
            <Footer />
          </Box>
        </Grid>
      </Box >
    </>
  )
}
