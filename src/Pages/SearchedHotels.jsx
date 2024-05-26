import React, { useEffect, useState } from 'react'
import Navigation from '../components/SearchedHotels/HotelNavigation'
import RatingLogo from '../Assets/Trending_hotels/Ratinglogo.svg'
import Slider from 'react-slick';
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { usePeopleContext } from '../Context/MainContext';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(26, 26, 26)',
    width: '280px', borderRadius: '12px'
  },
}));

export default function SearchedHotels() {
  const { hotelData, setHotelData } = usePeopleContext();
  const searchHotelInfoString = localStorage.getItem('searchHotel');
  const searchHotelInfo = searchHotelInfoString ? JSON.parse(searchHotelInfoString) : null;
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
  const navigate = useNavigate();
  const [searchHotelName, setSearchHotelName] = useState(searchHotelInfo[0]);
  const [url, setUrl] = useState(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchHotelInfo[0]}"}`);
  const [tempUrl, setTempUrl] = useState(url);
  console.log(searchHotelName, typeof searchHotelName, 'filterData:',typeof filter, url, tempUrl);

  const hotelPriceAndRating = (sortInput) => {
    let updatedUrl = url; // Create a copy of url
    if (sortInput[0] > 500 && sortInput[1] <= 12000) {
      updatedUrl += `&filter={"avgCostPerNight":{"$lte":${sortInput[1]},"$gte":${sortInput[0]}}}`;
    } else if (sortInput === 5) {
      updatedUrl += `&filter={"rating":{"$lte":5,"$gte":5}}`;
    } else if (sortInput === 4) {
      updatedUrl += `&filter={"rating":{"$lte":5,"$gte":4}}`;
    } else if (sortInput === 3) {
      updatedUrl += `&filter={"rating":{"$lte":4,"$gte":3}}`;
    }
    setTempUrl(updatedUrl); // Update tempUrl
  };

  const handelSorting = (sortInput) => {
    let updatedUrl = url; // Create a copy of url
    if (sortInput === 0) {
      updatedUrl += `&sort={"price":0}`;
    } else if (sortInput === 5 || sortInput === -1) {
      updatedUrl += `&sort={"price":-1}`;
    } else if (sortInput === 1) {
      updatedUrl += `&sort={"price":1}`;
    }
    setTempUrl(updatedUrl); // Update tempUrl
  };

  const handleHotelNavigate=(id)=>{
    localStorage.setItem("getId",id)
    navigate('/selectedHotel')
  }

  useEffect(() => {
    const searchHotelInfoString = localStorage.getItem('searchHotel');
    const searchHotelInfo = searchHotelInfoString ? JSON.parse(searchHotelInfoString) : null;

    if (searchHotelName && searchHotelInfo) {
      let updatedUrl = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${searchHotelInfo[0]}"}`;
      if (filter) {
        hotelPriceAndRating(filter);
        updatedUrl = tempUrl;
      } else if (sort) {
        handelSorting(sort);
        updatedUrl = tempUrl;
      }

      const hotelSearchedData = async () => {
        setIsLoading(true);
        try {
          
          const response = await fetch(updatedUrl, {
            method: 'GET',
            headers: {
              projectID: 'iwf86zcsd7tk',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setHotelData(data&&data.data.hotels);
            console.log(data&&data.data.hotels, 'hoteldata');
            
          } else {
            throw new Error('Something went wrong!');
          }
          
        } catch (error) {
          alert(error.message);
          console.error('Error fetching hotel data:', error.message);
          // Handle the error as needed
        }
        setIsLoading(false);
      };

      hotelSearchedData();
    }
  }, [searchHotelName, filter, sort, setHotelData, tempUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
}, [hotelData]); 

  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ display: 'inline-block', color: 'white', margin: '0 5px' }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    )
  };

  return (
    <div>
      <Box>
        <Navigation setSearchHotelName={setSearchHotelName} setSort={setSort} setFilter={setFilter} />
      </Box>
      {isLoading?<Box sx={{width:'100%'}}>
        <LinearProgress sx={{color:'#36c'}}/>
      </Box>
      :<Box>
      <Typography sx={{ fontSize: '24px', p: 2, fontWeight: 500 }}>Showing hotel in {searchHotelName}</Typography>
      <Grid container spacing={2} style={{ padding: "10px 20px" }}>
        {hotelData&& Array.isArray(hotelData)&&hotelData.map((item, index) => (
          <Grid item key={index} xs={12} sx={{ p: 1 }} sm={6} md={4} lg={3} xl={3} >
            {item.images && (
              <Box>
                <Slider id={item._id} className='hotelSlide' {...settings}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} onClick={()=>{handleHotelNavigate(item._id)}}>
                      <img src={image} alt={`image${imgIndex}`} loading="lazy"
                        style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                  ))}


                </Slider>
                <Box mt={'5px'} onClick={()=>{handleHotelNavigate(item._id)}}>
                  <Box className='hotelName' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: 500, width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '14px' }}>{item.name}</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                      <img src={RatingLogo} style={{ width: 18, height: 12, paddingRight: '5px' }} alt='ratingLOgo' />{item.rating}/5
                    </Typography>
                  </Box>
                  <Box className='hotelSubtitle' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '24px', color: 'rgb(128, 128, 128)' }}>4 -star hotel · The Mall Road</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '24px', color: 'rgb(128, 128, 128)' }}>
                      246 Ratings
                    </Typography>
                  </Box>
                  <Box className='hotelPrice' sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>₹{Math.floor(item.avgCostPerNight)}&nbsp;</Typography>
                    <Typography sx={{ fontSize: '12px', lineHeight: '24px' }}>
                      + ₹{item.rooms[0].costDetails.taxesAndFees}&nbsp;
                      tax<span style={{ color: 'rgb(17, 166, 112)' }}>/ night</span>
                    </Typography>
                  </Box>
                  <Box className='hotelDiscount' sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ textDecoration: 'line-through', fontSize: '12px', color: 'rgb(128, 128, 128)', lineHeight: '24px' }}>
                      ₹{Math.floor(
                        item.avgCostPerNight +
                        (item.avgCostPerNight * 18) / 100)}&nbsp;
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: 'rgb(26, 26, 26)', lineHeight: '24px' }}>
                      <span style={{ color: 'rgb(17, 166, 112)', fontSize: "12px" }}> 18% off</span>
                      <BootstrapTooltip title={<Box sx={{ p: '22px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 500, pb: 1 }}>Price breakup</Typography>
                        <Box sx={{ p: '14px 0px', borderBottom: '1px dashed white' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", lineHeight: '24px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>1 room x 1 night</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                              -₹{Math.floor(
                                item.avgCostPerNight +
                                (item.avgCostPerNight * 18) / 100)}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", mt: 1 }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Property discount</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'rgb(255, 79, 23)' }}>
                              ₹{Math.floor((item.avgCostPerNight * 18) / 100)}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", mt: 1 }}>
                          <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Price after discount</Typography>
                          <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>₹{Math.floor(item.avgCostPerNight)}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px', textAlign: 'end', fontWeight: 500 }}>₹{item.rooms[0].costDetails.taxesAndFees} tax</Typography>
                      </Box>}
                        placement="top"> + Additional bank discount</BootstrapTooltip>

                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

          </Grid>
        ))}
      </Grid>
      </Box>}

    </div>
  )
}
