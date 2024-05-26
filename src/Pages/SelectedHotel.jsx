import React, { useRef, useEffect, useState } from 'react'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import RatingLogo from '../Assets/Trending_hotels/Ratinglogo.svg'
import Slider from 'react-slick';
import './StylesPage.css'
import FullRating from '../Assets/Trending_hotels/fullrating.svg'
import PoolIcon from '@mui/icons-material/Pool';
import BarIcon from '@mui/icons-material/SportsBar';
import PetsIcon from '@mui/icons-material/Pets';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import Person2Icon from '@mui/icons-material/Person2';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CoupleIcon from '@mui/icons-material/PeopleOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import SpaIcon from '@mui/icons-material/HotTub';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SelectedHotelNav from '../components/Others/SelectedHotelNav'
import EventBusyRoundedIcon from '@mui/icons-material/EventBusyRounded';
import FastFoodIcon from '@mui/icons-material/FastfoodRounded';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import AcIcon from '@mui/icons-material/AcUnitRounded';
import RoomServiceIcon from '@mui/icons-material/ManageAccountsRounded';
import CrossIcon from '@mui/icons-material/CancelOutlined';
import StarIcon from '@mui/icons-material/StarOutlined';
import CircleRating from '../Assets/OtherLogos/CircleRating'
import CircleRating1 from '../Assets/OtherLogos/CircleRating1'
import InfoIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { AllRooms, Review } from '../Store';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer'
import { usePeopleContext } from '../Context/MainContext';
import LinearProgress from '@mui/material/LinearProgress';


export default function SelectedHotel() {
    const [navToggle, setNavToggle] = useState('general');
    const { hotelData, setHotelData } = usePeopleContext();
    const [isLoading, setIsLoading] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isShowAbout, setIsShowAbout] = useState(false);
    const hotelId = localStorage.getItem("getId")
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    function Amenities({ item }) {
        let icon = null;
        if (item === 'Free WiFi') {
            icon = <WifiIcon />
        }
        else if (item === 'Restaurant') {
            icon = <RestaurantIcon />
        }
        else if (item === 'Swimming Pool') {
            icon = <PoolIcon />
        }
        else if (item === 'Bar') {
            icon = <BarIcon />
        }
        else if (item === 'Gym') {
            icon = <FitnessCenterIcon />
        }
        else if (item === 'Spa') {
            icon = <SpaIcon />
        }
        else {
            icon = <SmartButtonIcon />
        }

        return (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '288px' }}>
                {icon}
                <Typography sx={{ pl: '14px', fontSize: '16px', fontWeight: 500, color: 'grey' }}>{item}</Typography>
            </Box>
        )
    }

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


    useEffect(() => {
        const handelRenderHotel = async () => {
            setIsLoading(true);
            try {
                let response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`, {
                    method: 'GET',
                    headers: {
                        projectID: 'iwf86zcsd7tk'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setHotelData(data.data);
                } else {
                    throw new Error('Failed to fetch hotel data');
                }
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                // Handle error - show error message, retry logic, etc.
            }
            setIsLoading(false);
        };

        if (hotelId) {
            handelRenderHotel();
        }
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScroll(scrollPosition >= 530);
        };

        if (hotelId) {
            handelRenderHotel();
        }

        window.addEventListener("scroll", handleScroll);
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, [hotelId]);

    const handleBookHotel = () => {
        navigate('/paymentHotel')
    }

    const rating = Math.floor(hotelData.rating)
    const ratingArray = Array.from({ length: rating }).fill(null)

    return (
        <div>

            <Box sx={{ p: '0px 5%' }}
            >
                <Box id='scrollable' sx={{ boxShadow: '0px 5px 5px -2px #e5eaf2', position: 'sticky', top: 0, zIndex: 900, background: 'white' }}>
                    {scroll ? <Box sx={{ mb: 2, pt: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: "16px" }}>
                            {hotelData.images && hotelData.images.length > 0 && <img src={hotelData.images[0]} style={{
                                width: '48px',
                                height: '48px', objectFit: 'cover', borderRadius: '4px'
                            }} alt='hotelImg' />}
                            <Box >
                                <Typography sx={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>{hotelData && hotelData.name}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 500, fontSize: '14px', lineHeight: '24px', color: 'grey' }}>
                                    {hotelData && hotelData.location}&nbsp;<Divider orientation='vertical' flexItem />&nbsp;
                                    {hotelData && hotelData.rating} - star Hotel &nbsp;<Divider orientation='vertical' flexItem />&nbsp; 1 Room, 2 Adults

                                </Box>
                            </Box>
                        </Box>

                    </Box> : <SelectedHotelNav />}

                    <Box sx={scroll ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } : {}}>
                        <Box sx={{ display: 'flex', pt: 1 }}>
                            <a href='#' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('general')} >
                                <Typography sx={navToggle === 'general' ? { fontSize: "16px", height: '30px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' }
                                    : { fontSize: "16px", fontWeight: 500, mr: 2, height: '30px', color: 'grey' }}>
                                    General
                                </Typography>
                            </a>
                            <a href='#amenities' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('amenities')} >
                                <Typography sx={navToggle === 'amenities' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    Amenities
                                </Typography>
                            </a>
                            <a href='#rules' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('rule')} >
                                <Typography sx={navToggle === 'rule' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    Rules</Typography>
                            </a>
                            <a href='#about' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('about')}>
                                <Typography sx={navToggle === 'about' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    About
                                </Typography></a>
                            <a href='#review' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('review')} >
                                <Typography sx={navToggle === 'review' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    Review</Typography>
                            </a>
                            <a href='#location' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('location')} >
                                <Typography sx={navToggle === 'location' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    Location</Typography>
                            </a>
                            <a href='#rooms' style={{ textDecoration: 'none' }} onClick={() => setNavToggle('rooms')} >
                                <Typography sx={navToggle === 'rooms' ? { fontSize: "16px", height: '35px', fontWeight: 500, mr: 2, color: 'black', borderBottom: '2px solid black' } :
                                    { fontSize: "16px", fontWeight: 500, mr: 2, height: '35px', color: 'grey' }}>
                                    Rooms</Typography>
                            </a>
                        </Box>
                        {scroll && <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', pr: 2 }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: 500, }}>₹{hotelData && Math.floor(hotelData.avgCostPerNight)}</Typography>
                            <Typography sx={{ fontSize: "14px", fontWeight: 500, color: 'grey' }}>/ night + {Math.floor((hotelData.avgCostPerNight * 4) / 100)} tax</Typography>
                            <Button sx={{ textTransform: 'none', minWidth: '190px', background: 'rgb(255, 79, 23)', ml: 2, px: 2, '&:hover': { background: 'rgb(206, 69, 1)' } }}
                                onClick={() => handleBookHotel()} variant="contained" >Book Now</Button>
                        </Box>}
                    </Box>
                </Box>
                {isLoading ? <Box sx={{ width: '100%' }}>
                    <LinearProgress sx={{ color: '#36c' }} />
                </Box> : <Box>
                    <Grid sx={{ marginBlock: 2 }} container className='displayHotelInfo'>
                        <Grid item xs={12} md={6} className='displayHotelInfoLeft'>
                            <Box>
                                <Typography sx={{ fontSize: '32px', fontWeight: 500, }}>{hotelData.name}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 500, my: 1, color: 'rgb(128, 128, 128)' }}>
                                    {hotelData.rating}-star Hotel · {hotelData.location}</Typography>
                                <Typography sx={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '20px', fontWeight: 500, color: 'rgb(26, 26, 26)', my: 1 }}>
                                    {hotelData.rating}/5
                                    <img src={RatingLogo} style={{ width: 28, paddingInline: '2px' }} alt='ratingLogo' />
                                    <Box>
                                        {
                                            ratingArray.map((_, index) => (
                                                <img key={index} style={{ width: 16 }} src={FullRating} alt="Circle Icon" />
                                            ))
                                        }</Box>
                                    <span style={{ fontSize: '16px' }}>({hotelData.rating && Math.floor(hotelData.rating * 100 + (hotelData.rating * 7))} reviews)</span>
                                </Typography>
                                <Divider sx={{ my: 3, color: 'grey' }} orientation='horizontal' flexItem />
                                <Box id='allInfoHotel'>
                                    <Box id='amenities'>
                                        <Typography sx={{ pb: 2, fontSize: '24px', fontWeight: 500 }}>Amenities</Typography>
                                        <Box sx={{ display: "flex", justifyContent: 'space-between', rowGap: '24px', flexWrap: 'wrap', maxWidth: '600px' }}>

                                            {/* Mapping over amenities */}
                                            {hotelData.amenities && hotelData.amenities.map((item, index) => (
                                                <Amenities item={item} key={index} />
                                            ))}

                                        </Box>
                                        <Button onClick={handleClick} sx={{
                                            textTransform: 'none', color: 'black', my: 2,
                                            border: '1px solid black', width: '280px', borderRadius: '8px'
                                        }}>
                                            See all amenities
                                        </Button>
                                        <Snackbar
                                            open={open}
                                            autoHideDuration={2500}
                                            onClose={handleClose}
                                            message="Not available"
                                            action={action}
                                        />
                                    </Box>
                                    <Divider sx={{ my: 3, color: 'grey' }} orientation='horizontal' flexItem />
                                    <Box id='rules'>
                                        <Typography sx={{ pb: 2, fontSize: '24px', fontWeight: 500 }}>Popular rules</Typography>

                                        {hotelData.houseRules && <Box>
                                            <Typography sx={{ fontWeight: '18px', fontWeight: 500, my: 1 }}>
                                                <PetsIcon sx={{ fontSize: '18px', pr: '14px' }} />
                                                {!hotelData.houseRules.restrictions.petsAllowed ? ' Pets NOT allowed within the premises' : ' Pets allowed here'}
                                            </Typography>
                                            <Typography sx={{ fontWeight: '18px', fontWeight: 500, my: 1 }}>
                                                {hotelData.houseRules.restrictions.smokingAllowed ? <span>
                                                    <SmokingRoomsIcon sx={{ fontSize: '18px', pr: '14px' }} /> Smoking Allowed</span>
                                                    : <span><SmokeFreeIcon sx={{ fontSize: '18px', pr: '14px' }} /> Smoking NOT Allowed</span>}
                                            </Typography>
                                            <Typography sx={{ fontWeight: '18px', fontWeight: 500, my: 1 }}>
                                                <CoupleIcon sx={{ fontSize: '18px', pr: '14px' }} />
                                                {hotelData.houseRules.guestProfile.unmarriedCouplesAllowed ? ' Unmarried couples allowed'
                                                    : 'Unmarried couples NOT allowed'}
                                            </Typography>
                                            <Typography sx={{ fontWeight: '18px', fontWeight: 500, my: 1 }}>
                                                <Person2Icon sx={{ fontSize: '18px', pr: '14px' }} />
                                                {hotelData.houseRules.idProofRelated.localIdsAllowed ? ' Local Id is required' : 'Local Id NOT required'}
                                            </Typography>

                                            <Typography sx={{ fontWeight: '18px', fontWeight: 500, my: 1 }}>
                                                <AccountBoxIcon sx={{ fontSize: '18px', pr: '14px' }} /> Id proofs required
                                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                    {hotelData.houseRules.restrictions.idProofsAccepted
                                                        && hotelData.houseRules.restrictions.idProofsAccepted.map((item, index) => (
                                                            <Typography sx={{ fontSize: '14px', fontWeight: 500, px: 1, my: 2 }} key={index}>· {item} </Typography>
                                                        ))}
                                                </Box>
                                            </Typography>

                                        </Box>
                                        }
                                        <Button onClick={handleClick} sx={{
                                            textTransform: 'none', color: 'black', my: 2,
                                            border: '1px solid black', width: '280px', borderRadius: '8px'
                                        }}>
                                            See all rules
                                        </Button>

                                    </Box>
                                    <Divider sx={{ my: 3, color: 'grey' }} orientation='horizontal' flexItem />
                                    <Box id='about'>
                                        <Typography sx={{ pb: 2, fontSize: '24px', fontWeight: 500 }}>About</Typography>
                                        <Typography sx={isShowAbout ? { fontSize: '16px', height: 'auto' } :
                                            { fontSize: '16px', maxHeight: '220px', overflow: 'hidden' }}>
                                            Nothing beats the warmth of individual, one to one service from people who care.
                                            It is with this belief that we offer genuine and a one of a kind experience to each one of our guests.
                                            Whether you want to reach out and touch the clouds or fancy a romantic dinner under starlit skies, bring us your wishlist and
                                            we’ll help you check all the boxes on that list. The location cannot be any better. Our hotel is as unique as the city around it.
                                            At Mosaic Mussoorie, you get to design your own mix. Sink into the leisurely pace of life or take a walk on the Mall Road to feel the hustle
                                            and bustle of the age old city of Mussoorie, the queen of hills. The Green wall at the entrance comprises of hundreds of flowering plants, designed specifically
                                            for purifying the air and keeping pollution at bay, is an innovative idea. Take a cooking class and learn how to create the region’s specialty dishes. Discover the beautiful town of Mussoorie.
                                            Explore the flora and fauna. Embark upon our carefully designed treks that take you through the town. Relax at our indoor heated pool and spa and rest your body with an aromatherapy massage at the hotel.
                                            Mosaic Mussoorie is an ultimate urbane retreat. We are at the centre of Mussoorie and put you at the heart of where it all happens. Come and get your own mix at Mosaic. Its an experience you talk about.
                                            Rooms at Mosaic are each a piece of art. For the house so much. From a basket of juicy fruits to a mini bar welcome drinks to goodnight chocolates.
                                            And from the leading dailies business kit to wi-fi and LAN connectivity.
                                            The good thing about a room is that it soon becomes my room.
                                            It knows how to belong because it has been nurtured with empathy detailing and foresight.
                                            46 rooms are set up to snugly fit into guests life. So that you stretch your hand and what you need is within the reach. To offer Food & Beverage hotel has a Grill called Charcoal along with Indian Restaurant known as Random. To cater the needs of MICE & leisure requirements hotel is equipped with meeting rooms and banquets which can take care of 10 to 50 guests in different style gathering.
                                            Hotel has a temperature control swimming pool and Spa and kids activity area for in house guests.

                                        </Typography>
                                        {!isShowAbout && <Box id='whiteSpace'>
                                            <ArrowDropDownRoundedIcon sx={{ fontSize: '3.7rem', height: '88px' }} />
                                        </Box>}
                                        <Button sx={{
                                            textTransform: 'none', color: 'black', my: 2,
                                            border: '1px solid black', width: '280px', borderRadius: '8px'
                                        }} onClick={() => setIsShowAbout(!isShowAbout)} >
                                            Read more
                                        </Button>
                                    </Box>
                                    <Divider sx={{ my: 3, color: 'grey' }} orientation='horizontal' flexItem />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='displayHotelInfoRight'>
                            <Box>
                                <Box>
                                    {hotelData.images && (
                                        <Box>
                                            <Slider id={hotelData._id} className='hotelSlide' {...settings}>
                                                {hotelData.images && hotelData.images.map((image, imgIndex) => (
                                                    <div key={imgIndex} >
                                                        <img src={image} alt={`image${imgIndex}`} loading="lazy"
                                                            style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '8px' }} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </Box>)}
                                </Box>

                                <Box sx={{ width: '90%', p: 4, boxShadow: '0px 0px 2px grey', borderRadius: '8px', my: 3 }}>
                                    <Box >
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', pr: 2 }}>
                                                    <Typography sx={{ fontSize: "20px", fontWeight: 500, }}>₹{hotelData && Math.floor(hotelData.avgCostPerNight)}</Typography>
                                                    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: 'grey' }}>/ night + {Math.floor((hotelData.avgCostPerNight * 4) / 100)} tax</Typography>

                                                </Box>
                                                <Typography sx={{ fontSize: '14px', color: 'grey' }}>No cost EMI from ₹4,097</Typography>
                                            </Box>
                                            <Button onClick={() => handleBookHotel()} sx={{
                                                textTransform: 'none', minWidth: '180px', height: '45px', borderRadius: '8px',
                                                background: 'rgb(255, 79, 23)', ml: 2, px: 2, '&:hover': { background: 'rgb(206, 69, 1)' }
                                            }}
                                                variant="contained" >Select room</Button>
                                        </Box>
                                        <Divider sx={{ my: 3 }} orientation='horizontal' flexItem />
                                        <Typography sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}><FastFoodIcon /> Breakfast included</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box id='location'>
                        <Typography sx={{ pb: 2, fontSize: '24px', fontWeight: 500 }}>Location</Typography>
                        <Box sx={{ width: '100%', height: '280px' }}>
                            <iframe
                                src={`https://maps.google.com/maps?&q=${hotelData?.name}, mumbai&output=embed`}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "16px",
                                }}
                                allowfullscreen=""
                                loading="lazy"
                            >{console.log(hotelData.name, hotelData.location)}</iframe>
                        </Box>

                    </Box>
                    <Box id='room'>
                        <Typography sx={{ py: 3, fontSize: '24px', fontWeight: 500, mt: '12px' }}>Rooms Available</Typography>
                        <Box sx={{
                            display: 'flex', boxShadow: '0px 0px 2px grey', px: 3, borderRadius: '8px', gap: '38px',
                            alignItems: 'center', py: 2, flexWrap: 'wrap'
                        }}>
                            <Typography sx={{ fontSize: '15px', boxShadow: '0px 0px 2px grey', p: '5px 9px', borderRadius: '6px' }}>2 room type</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Filter rooms by </Typography>
                            <Typography sx={{ display: 'flex', fontSize: '15px', boxShadow: '0px 0px 2px grey', borderRadius: '6px', p: '5px 9px', alignItems: 'center', gap: '5px' }}>
                                <FastFoodIcon /> Free Breakfast</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex", alignItems: 'center', gap: '8px', p: 1, boxShadow: '0px 0px 2px grey', borderRadius: '6px'
                            , background: '#f3f1f1', my: 4, maxWidth: '260px'
                        }}>
                            <Box>
                                <EventBusyRoundedIcon />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>NO cost EMI <span style={{ color: 'grey' }}>Pay in 3 interest</span></Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'grey' }}>free EMIs with 5 major bank</Typography>
                            </Box>
                        </Box>
                        <Box id='rooms' sx={{ width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Slider id={hotelData._id} className='hotelInfoSlide' {...settings}>
                                            {hotelData.images && hotelData.images.map((image, imgIndex) => (
                                                <div key={imgIndex} >
                                                    <img src={image} alt={`image${imgIndex}`} loading="lazy"
                                                        style={{ width: '100%', height: '208px', objectFit: 'cover', borderRadius: '8px' }} />
                                                </div>
                                            ))}
                                        </Slider>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography sx={{ pb: 2, fontSize: '20px', fontWeight: 500 }}>House, 1 Queen Bed, View</Typography>
                                        <Box sx={{ display: "flex", alignItems: 'center', flexWrap: 'wrap', }}>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <AcIcon /> <span>Air conditioner</span>
                                            </Typography>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <FastFoodIcon /> <span>Free breakfast</span>
                                            </Typography>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <TvRoundedIcon /> <span>TV</span>
                                            </Typography>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <RoomServiceIcon /> <span>Room service</span>
                                            </Typography>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <WifiIcon /> <span>Wifi Access</span>
                                            </Typography>
                                            <Typography sx={{ mb: 3, width: '241px', display: "flex", alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                                <BarIcon /> <span>Mini Bar</span>
                                            </Typography>

                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box sx={{ width: '100%', my: 3 }}>
                                <Grid container spacing={3}>
                                    {AllRooms.map((room, index) => (
                                        <Grid item xs={12} sm={4}>
                                            <Box sx={{ width: '100%', borderRadius: '6px', boxShadow: '0px 0px 2px grey', px: 3, py: 5, boxSizing: 'border-box' }}>
                                                <Typography sx={{ fontWeight: 500, fontSize: '16px', mb: 1 }}>
                                                    {room.title}
                                                </Typography>
                                                <Typography>Type - {room.type}</Typography>
                                                <Box sx={{ mb: 2 }}>
                                                    <Typography sx={{ fontSize: '14px', display: 'flex', alignItems: "center", gap: '5px', height: '48px' }}>
                                                        <FastFoodIcon />
                                                        {room.avlFoods}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '14px', display: 'flex', alignItems: "center", gap: '5px', height: '48px' }}>
                                                        <CrossIcon /> Cancellation charges apply <InfoIcon />
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>₹{hotelData && Math.floor(hotelData.avgCostPerNight + (hotelData.avgCostPerNight * room.cost) / 100)} </Typography>
                                                        <Typography sx={{ fontSize: "14px" }}>+ {hotelData && Math.floor((hotelData.avgCostPerNight * (4 + index)) / 100)} tax </Typography>
                                                        <Typography sx={{ fontSize: "14px", fontWeight: 500, color: 'grey' }}>&nbsp;/ night</Typography>
                                                    </Box>

                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontSize: '14px', textDecoration: 'line-through', color: 'grey' }}>₹{hotelData && Math.floor(hotelData.avgCostPerNight +
                                                            (hotelData?.avgCostPerNight * room.discount) / 100)} </Typography>
                                                        <Typography sx={{ color: "orange", fontSize: '14px' }}>&nbsp;{room.discount}% &nbsp;</Typography>
                                                        <Typography sx={{ fontSize: "14px" }}>&nbsp; No cost EMI 3,818</Typography>
                                                    </Box>

                                                </Box>

                                                <Button onClick={() => handleBookHotel()}
                                                    sx={{ width: '100%', mt: 3, background: 'rgb(255, 79, 23)', color: 'white', '&:hover': { background: 'rgb(206, 69, 1)' } }}>
                                                    Book now
                                                </Button>

                                            </Box>

                                        </Grid>))
                                    }
                                </Grid>
                            </Box>
                        </Box>

                    </Box>
                    <Divider orientation='horizontal' sx={{ color: 'grey', my: 3 }} flexItem />
                    <Box sx={{ my: 2 }} id='review'>

                        <Typography sx={{ py: 3, fontSize: '24px', fontWeight: 500, mt: '12px' }}>Rating & reviews</Typography>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }} >
                                                <Typography variant="h3">{hotelData.rating}/5</Typography>
                                                <Typography sx={{ fontSize: '18px', color: 'grey' }}>({hotelData.rating && Math.floor(hotelData.rating * 100 + (hotelData.rating * 7))} reviews)</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', gap: '10px', my: 2 }}>
                                                <img src={RatingLogo} style={{ width: 22, paddingInline: '2px' }} alt='ratingLogo' />
                                                <Box>
                                                    {
                                                        ratingArray.map((_, index) => (
                                                            <img key={index} style={{ width: 14 }} src={FullRating} alt="Circle Icon" />
                                                        ))
                                                    }</Box>
                                            </Box>

                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                                5<StarIcon sx={{ fontSize: '14px' }} /><Box sx={{ display: 'flex', width: 135, height: 5, background: 'lightgrey', borderRadius: '12px' }}>
                                                    <Box sx={{ width: '70%', background: 'black', borderRadius: '12px 0px 0px 12px' }} ></Box></Box>1.1k
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                                4<StarIcon sx={{ fontSize: '14px' }} />
                                                <Box sx={{ display: 'flex', width: 135, height: 5, background: 'lightgrey', borderRadius: '12px' }}>
                                                    <Box sx={{ width: '80%', background: 'black', borderRadius: '12px 0px 0px 12px' }} ></Box></Box>1.8k
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                                3<StarIcon sx={{ fontSize: '14px' }} /><Box sx={{ display: 'flex', width: 135, height: 5, background: 'lightgrey', borderRadius: '12px' }}>
                                                    <Box sx={{ width: '58%', background: 'black', borderRadius: '12px 0px 0px 12px' }} ></Box></Box>368
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                                2<StarIcon sx={{ fontSize: '14px' }} /><Box sx={{ display: 'flex', width: 135, height: 5, background: 'lightgrey', borderRadius: '12px' }}>
                                                    <Box sx={{ width: '30%', background: 'black', borderRadius: '12px 0px 0px 12px' }} ></Box></Box>113
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px' }}>
                                                1<StarIcon sx={{ fontSize: '14px' }} /><Box sx={{ display: 'flex', width: 135, height: 5, background: 'lightgrey', borderRadius: '12px' }}>
                                                    <Box sx={{ width: '15%', background: 'black', borderRadius: '12px 0px 0px 12px' }} ></Box></Box>48
                                            </Box>

                                        </Box>
                                    </Box>


                                </Grid>
                                <Grid sx={{ placeItems: 'center' }} item xs={12} sm={7}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{ width: '100px' }}>
                                            <CircleRating />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px', mt: 1, p: 1 }}>Room</Typography>
                                        </Box>
                                        <Box sx={{ width: '100px' }}>
                                            <CircleRating1 />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px', mt: 1, p: '8px 8px 8px 0px' }}>Location</Typography>
                                        </Box>
                                        <Box sx={{ width: '100px' }}>
                                            <CircleRating />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px', mt: 1, p: 1 }}>Food</Typography>
                                        </Box>
                                        <Box sx={{ width: '100px' }}>
                                            <CircleRating1 />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px', mt: 1, p: 1 }}>Value</Typography>
                                        </Box>
                                        <Box sx={{ width: '100px' }}>
                                            <CircleRating />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px', mt: 1, p: 1 }}>Service</Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            </Grid>
                            <Box>

                            </Box>

                        </Box>

                        <Divider orientation='horizontal' sx={{ color: 'grey', my: 5 }} flexItem />

                        <Grid container spacing={3}>
                            {Review && Review.map((post, index) => (
                                <Grid key={index} item xs={12} sm={6}>
                                    <Box sx={{ p: 5, borderRadius: '10px', boxShadow: '0px 0px 2px grey' }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{post.title}</Typography>
                                        <Box sx={{ py: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <img src={RatingLogo} style={{ width: 22, paddingInline: '2px' }} alt='ratingLogo' />
                                            <Typography sx={{ color: 'grey', fontWeight: '14px' }}>{post.rating}/5</Typography>
                                            · <Typography sx={{ color: 'grey', fontWeight: '14px', fontWeight: 500 }}>{post.name}</Typography>
                                        </Box>
                                        <Box sx={{ minHeight: '190px' }}>
                                            <Typography sx={{ fontSize: '16px', lineHeight: '24px' }}>{post.comment}</Typography>
                                        </Box>
                                        <Box onClick={handleClick} sx={{ pt: 3, color: 'blue', fontWeight: 500, cursor: "pointer", fontSize: '15px' }}>Read More</Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>


                    </Box>
                </Box>}
            </Box>
            <Footer />

        </div>
    )
}
