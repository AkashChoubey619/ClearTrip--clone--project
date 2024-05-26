import { Box, Typography, Button, Stack, Paper, ButtonGroup, MenuItem, Menu, Divider, Grid } from '@mui/material'
import RightArrow from '@mui/icons-material/East';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import DoneIcon from '@mui/icons-material/DoneOutlined';
import MenuArrowIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrowsOutlined';
import MinusIcon from '@mui/icons-material/RemoveOutlined';
import PlusIcon from '@mui/icons-material/Add';
import RightLeft from '../Assets/right-left.png';
import Calender from '../Assets/calendar.png';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import DatePicker from 'react-datepicker';
import RightSection from '../components/RightSectionFlight';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../components/Footer";
import './StylesPage.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LeftNavigation from '../components/LeftNavigation';
import MiddleContentFlight from '../components/MiddleContentFlight';
import Navigation from '../components/Navigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { suggestions } from '../Store';

export default function SearchForFlight() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorPerson, setAnchorPerson] = useState(null);
    const initially1 = `${suggestions[0].iata_code} - ${suggestions[0].city}, IN - ${suggestions[0].name}`;
    const initially2 = `${suggestions[3].iata_code} - ${suggestions[3].city}, IN - ${suggestions[3].name}`;
    const [searchInputOne, setSearchInputOne] = useState(initially1);
    const [searchInputTwo, setSearchInputTwo] = useState(initially2);
    const [selectPerson, setSelectPerson] = useState('regular');
    const [tripType, setTripType] = useState('oneWay'); // Default selected option is 'oneWay'
    const [rotationAngle, setRotationAngle] = useState(0);
    const [rotateMenuArrow, setRotateMenuArrow] = useState(0);
    const [rotationMenuArrow, setRotationMenuArrow] = useState(0);
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantsCount, setInfantsCount] = useState(0);
    const [flightClasses, setFlightClasses] = useState("Economy")
    const navigate = useNavigate();
    const [presentDate, setPresentDate] = useState(new Date());
    const tomorrow = new Date(); // Create a new Date object
    tomorrow.setDate(tomorrow.getDate() + 1); // Adjust it to represent tomorrow's date 
    const [tomorrowDate, setTomorrowDate] = useState(tomorrow); // Set tomorrow's date as initial state
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleDateChange = (date) => {
        setPresentDate(date);
    };

    const handleDateChangeTomorrow = (date) => {
        setTomorrowDate(date);
    };



    const handleBoxClick = () => {
        const newRotationAngle = rotationAngle + 180; // Increase the rotation angle by 360 degrees
        setRotationAngle(newRotationAngle);
        setSearchInputOne(searchInputTwo)
        setSearchInputTwo(searchInputOne)
    };

    const increaseAdultCount = () => {
        if (adultCount < 3) {
            setAdultCount(prev => prev + 1);
        }
    };
    const decreaseAdultCount = () => {
        if (adultCount > 1) {
            setAdultCount(prev => prev - 1)
        }
    };
    const increaseChildrenCount = () => {
        if (childrenCount < 8) {
            setChildrenCount(prev => prev + 1);
        }
    };
    const decreaseChildrenCount = () => {
        if (childrenCount > 0) {
            setChildrenCount(prev => prev - 1);
        }
    };
    const increaseInfantCount = () => {
        if (infantsCount < 1) {
            setInfantsCount(prev => prev + 1);
        }
    };
    const decreaseInfantCount = () => {
        if (infantsCount > 0) {
            setInfantsCount(prev => prev - 1);
        }
    };

    const handleSearchFlight = () => {
        const [iataCode1, city1, name1] = initially1.split(' - ');
        const [iataCode2, city2, name2] = initially2.split(' - ');

        const flightOne = {
            city: city1,
            iata_code: iataCode1,
            name: name1
        };

        const flightTwo = {
            city: city2,
            iata_code: iataCode2,
            name: name2
        };
        const searchFlightData = [flightOne, flightTwo, presentDate, tomorrowDate, tripType];

        localStorage.setItem("searchFlight", JSON.stringify(searchFlightData));
        console.log(JSON.parse(localStorage.getItem('searchFlight')), 'localStorage')
        // console.log(flightOne, flightTwo, 'localStorage')
        navigate('/searchedFlight')
    }

    const selectedPerson = {
        borderRadius: '20px', color: '#36c', background: '#d6e8fc', textTransform: 'none',
        border: '1px solid lightgrey', fontWeight: 500, border: '1px solid #36c'
    }

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        const newRotationAngle = rotateMenuArrow === 0 ? 180 : 0; // Increase the rotation angle by 360 degrees
        setRotateMenuArrow(newRotationAngle);
    };

    const handleClose = () => {
        setAnchorEl(null);
        const newRotationAngle = rotateMenuArrow === 0 ? 180 : 0;; // Increase the rotation angle by 360 degrees
        setRotateMenuArrow(newRotationAngle);
    };
    const handleOpenPerson = (event) => {
        setAnchorPerson(event.currentTarget);
        const newRotationAngle = rotationMenuArrow === 0 ? 180 : 0; // Increase the rotation angle by 360 degrees
        setRotationMenuArrow(newRotationAngle);
    };

    const handleClosePerson = () => {
        setAnchorPerson(null);
        const newRotationAngle = rotationMenuArrow === 0 ? 180 : 0; // Increase the rotation angle by 360 degrees
        setRotationMenuArrow(newRotationAngle);
    };

    const handleSelection = (type) => {
        setTripType(type);
        handleClose();
    }

    return (
        <Box sx={{overflowY:'hidden'}}>
            <Navigation />
            <Box sx={{ maxWidth: '100%', paddingInline: '20px' }}>
                <Grid container spacing={5} justifyContent={'center'} mt={1} gap={'10px'}>
                    <Grid minWidth={'255px'} item xs={12} sm={2}>
                        <LeftNavigation />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontWeight: 500, mb: 1 }} variant='h4' component={'h4'}>Search flights</Typography>
                            <Typography sx={{ fontSize: '16px', mb: 4, ml: 1 }} variant='body2'>Enjoy hassle free bookings with Cleartrip</Typography>
                            <Paper sx={{ p: '25px', borderRadius: '12px', border: '0.5 px solid light grey' }} elevation={3}>
                                <form>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                                        <Box sx={{ minWidth: 150 }}>
                                            <Button type='button'
                                                onClick={handleOpen}
                                                style={{ minWidth: 100, m: 0, border: 'none', textTransform: 'none', color: 'black' }}
                                            >
                                                <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                                                    {tripType === 'roundTrip' ? <CompareArrowsIcon style={{ marginTop: '-4px', color: 'grey' }} />
                                                        : <RightArrow style={{ marginTop: '-4px', color: 'grey' }} />}
                                                    {tripType === 'oneWay' ? 'One Way' : 'Round Trip'}
                                                    <MenuArrowIcon style={{ transform: `rotate(${rotateMenuArrow}deg)` }} /></Box>
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleClose}
                                            >
                                                <MenuItem sx={{ paddingInline: '15px', paddingBlock: '10px' }} onClick={() => handleSelection('oneWay')}>
                                                    <DoneIcon sx={tripType === 'oneWay' ? { display: 'flex' } : { visibility: 'hidden' }} />&nbsp; One Way</MenuItem>
                                                <MenuItem sx={{ paddingInline: '20px', paddingBlock: '10px' }} onClick={() => handleSelection('roundTrip')}>
                                                    <DoneIcon sx={tripType === 'roundTrip' ? { display: 'flex' } : { visibility: 'hidden' }} />&nbsp; Round Trip</MenuItem>
                                            </Menu>
                                        </Box>
                                        <Box sx={isMediumScreen?{ml:0}:{ marginLeft: '45px' }}>
                                            <Box>
                                                <Button type='button'
                                                    onClick={handleOpenPerson}
                                                    sx={{ minWidth: 100, m: 0, border: 'none', textTransform: 'none', color: 'black' }}

                                                >
                                                    <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
                                                        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', fontWeight: 500 }}
                                                        ><PersonIcon style={{ marginTop: '-4px', color: 'grey', marginRight: 8 }} />{adultCount} Adult , {flightClasses}
                                                            {childrenCount > 0 && <span>, {childrenCount} Children</span>}
                                                            {infantsCount > 0 && <span>, {infantsCount} Infants </span>}
                                                        </Typography>
                                                        <MenuArrowIcon style={{ transform: `rotate(${rotationMenuArrow}deg)` }} />
                                                    </Box>
                                                </Button>
                                                <Menu
                                                    anchorEl={anchorPerson}
                                                    open={Boolean(anchorPerson)}
                                                    onClose={handleClosePerson}
                                                    PaperProps={{ sx: { boxSizing: 'border-box', borderRadius: '15px' } }}
                                                >
                                                    <Box sx={{ p: "20px", borderRadius: '15px', boxSizing: 'border-box' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', display: 'block' }} variant='body' >Adults</Typography>
                                                                <Typography sx={{ fontSize: '12px', fontWeight: 500 }} variant='body'>(12+ years)</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <Box sx={adultCount === 1 ? {
                                                                    border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                    justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                } :
                                                                    {
                                                                        border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                    }}
                                                                    onClick={decreaseAdultCount}>
                                                                    <MinusIcon sx={adultCount === 1 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                                <span style={{ paddingInline: '12px', fontSize: '16px' }}> {adultCount} </span>
                                                                <Box sx={adultCount === 3 ? {
                                                                    border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                    justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                } :
                                                                    {
                                                                        border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                    }}
                                                                    onClick={increaseAdultCount} >
                                                                    <PlusIcon sx={adultCount === 3 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', display: 'block' }} variant='body'>Children</Typography>
                                                                <Typography sx={{ fontSize: '12px', fontWeight: 500 }} variant='body'>(2 - 12 yrs)</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <Box sx={childrenCount === 0 ? {
                                                                    border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                    justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                } :
                                                                    {
                                                                        border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                    }}
                                                                    onClick={decreaseChildrenCount}>
                                                                    <MinusIcon sx={childrenCount === 0 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                                <span style={{ paddingInline: '12px', fontSize: '16px' }}>{childrenCount}</span>
                                                                <Box sx={childrenCount === 8 ? {
                                                                    border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                    justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                } :
                                                                    {
                                                                        border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                    }}
                                                                    onClick={increaseChildrenCount}>
                                                                    <PlusIcon sx={childrenCount === 8 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', display: 'block' }} variant='body'>Infants</Typography>
                                                                <Typography sx={{ fontSize: '12px', fontWeight: 500 }} variant='body'>(Below 2 yrs)</Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <Box sx={infantsCount === 0 ? {
                                                                    border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                    justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                } :
                                                                    {
                                                                        border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                    }}
                                                                    onClick={decreaseInfantCount}>
                                                                    <MinusIcon sx={infantsCount === 0 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                                <span style={{ paddingInline: '12px', fontSize: '16px' }}>{infantsCount}</span>
                                                                <Box
                                                                    sx={infantsCount > 0 ? {
                                                                        border: '1px solid grey', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                        justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', cursor: 'not-allowed'
                                                                    } :
                                                                        {
                                                                            border: '1px solid #36c', borderRadius: '20px', p: '5px', width: '23px', height: '23px',
                                                                            justifyContent: 'center', alignItems: 'center', display: 'flex', color: '#36c', cursor: 'pointer'
                                                                        }}
                                                                    onClick={increaseInfantCount}>
                                                                    <PlusIcon sx={infantsCount > 0 ? { color: 'grey' } : { color: '#36c' }} /></Box>
                                                            </Box>
                                                        </Box>
                                                        <Box
                                                            aria-label="Disabled button group"
                                                            sx={{
                                                                display: 'flex', p: 2, my: '3px',
                                                                textTransform: 'none',
                                                                gap: '9px', flexWrap: 'wrap'
                                                            }}
                                                        >
                                                            <Button className='btn-grp'
                                                                style={flightClasses === 'Economy' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 400 }}
                                                                onClick={() => setFlightClasses('Economy')}
                                                                variant='outlined'>Economy</Button>
                                                            <Button className='btn-grp'
                                                                style={flightClasses === 'Business class' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 400 }}
                                                                onClick={() => setFlightClasses('Business class')}
                                                                variant='outlined'>Business class</Button>
                                                            <Button className='btn-grp'
                                                                style={flightClasses === 'First class' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 400 }}
                                                                onClick={() => setFlightClasses('First class')}
                                                                variant='outlined'>First class</Button>
                                                            <Button className='btn-grp'
                                                                style={flightClasses === 'Premium economy' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 400 }}
                                                                onClick={() => setFlightClasses('Premium economy')}
                                                                variant='outlined'>Premium economy </Button>
                                                        </Box>
                                                    </Box>
                                                </Menu>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box

                                        aria-label="Disabled button group"
                                        sx={{
                                            display: 'flex', p: 2, my: '3px',
                                            textTransform: 'none',
                                            gap: '9px', flexWrap: 'wrap'
                                        }}
                                    >
                                        <Button className='btn-grp'
                                            style={selectPerson === 'regular' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 500 }}
                                            onClick={() => setSelectPerson('regular')} variant='outlined'>
                                            Regular fare</Button>
                                        <Button className='btn-grp'
                                            style={selectPerson === 'senior' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 500 }}
                                            onClick={() => setSelectPerson('senior')} variant='outlined'>
                                            Senior citizen fare</Button>
                                        <Button className='btn-grp'
                                            style={selectPerson === 'student' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 500 }}
                                            onClick={() => setSelectPerson('student')} variant='outlined'>
                                            Student fare</Button>
                                        <Button className='btn-grp'
                                            style={selectPerson === 'armed' ? selectedPerson : { borderRadius: '20px', color: 'black', textTransform: 'none', border: '1px solid lightgrey', fontWeight: 500 }}
                                            onClick={() => setSelectPerson('armed')} variant='outlined'>
                                            Armed forces fare</Button>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%', m: 1, mb: 4 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mr: 1 }}>
                                            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', flex: 1, borderRadius: '9px 0px 0px 9px', position: 'relative' }}
                                                border={'1px solid lightgrey'}>
                                                <FlightTakeoffIcon style={{ marginLeft: '20px' }} />
                                                <input type='text' value={searchInputOne} onChange={(e) => setSearchInputOne(e.target.value)}
                                                    style={{
                                                        width: '100%', padding: '15px',
                                                        boxSizing: 'border-box', fontSize: '15px', fontWeight: 600,
                                                        border: 'none', outline: 'none', borderRadius: '9px 0px 0px 9px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }} list="suggestions1"
                                                    placeholder='Where from..?' />
                                                <datalist id="suggestions1" >
                                                    {suggestions?.map((cities, index) => (
                                                        <option key={index} onClick={(e) => setSearchInputOne(e).target.value}
                                                            value={`${cities.iata_code} - ${cities.city}, IN - ${cities.name}`} />
                                                    ))}
                                                </datalist>
                                            </Box>
                                            <Box
                                                sx={{
                                                    height: '25px', width: '25px', zIndex: 5, marginLeft: '-17px', padding: '3px',
                                                    background: 'white', border: '1px solid #36c', borderRadius: '20px',
                                                    cursor: 'pointer', // Add cursor pointer to indicate it's clickable
                                                    transition: 'transform 0.5s', // Add transition for smooth rotation
                                                    transform: `rotate(${rotationAngle}deg)`
                                                }} onClick={handleBoxClick}>
                                                <img src={RightLeft} alt='swap' style={{ width: '100%' }} />
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, ml: '-17px', borderRadius: '0px 9px 9px 0px' }}
                                                border={'1px solid lightgrey'}>
                                                <FlightLandIcon style={{ marginLeft: '28px' }} />
                                                <input type='text' value={searchInputTwo} onChange={(e) => setSearchInputTwo(e.target.value)}
                                                    style={{
                                                        width: '100%',
                                                        boxSizing: 'border-box', padding: '15px', fontSize: '15px', fontWeight: 600,
                                                        border: 'none', outline: 'none', borderRadius: '0px 9px 9px 0px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }} list="suggestions2" placeholder='Where to..?' />
                                                <datalist id="suggestions2" onClick={(e) => setSearchInputTwo(e).target.value}>
                                                    {suggestions?.map((cities, index) => (
                                                        <option key={index}
                                                            value={`${cities.iata_code} - ${cities.city},IN - ${cities.name}`} />
                                                    ))}
                                                </datalist>
                                            </Box>

                                        </Box>
                                    </Box>
                                    <Box sx={isMediumScreen?{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: 'wrap' }:
                                { display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
                                        <Box id='dateBox' sx={{ display: 'flex', alignItems: 'center', ml: 1, maxWidth: '100%' }}>
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
                                            <Divider sx={{ height: '48', marginTop: '4px' }} orientation='vertical' flexItem />
                                            {tripType === 'oneWay' ? <Typography onClick={() => handleSelection('roundTrip')}
                                                sx={{ fontWeight: 500, fontSize: '14px', color: 'grey', px: '10px', width: '8em' }}
                                            >Return</Typography> : <DatePicker
                                                id="presentDateRound"
                                                selected={tomorrowDate}
                                                onChange={handleDateChangeTomorrow}
                                                dateFormat="E, MMM d"
                                                placeholderText="Return"
                                                className="custom-datepicker"
                                                popperClassName="custom-calendar-popper"
                                            />}
                                        </Box>
                                        <Button onClick={handleSearchFlight}
                                            sx={isMediumScreen?{ width: '188px', padding: '11px', color: 'white', background: '#f77728', borderRadius: '9px', textTransform: 'none', ':hover': { background: '#c56226' },m:1 }
                                            :{ width: '188px', padding: '11px', color: 'white', background: '#f77728', borderRadius: '9px', textTransform: 'none', ':hover': { background: '#c56226' } }}>
                                            Search flights</Button>
                                    </Box>

                                </form>
                            </Paper>


                            <Box sx={isMediumScreen?{my:0}:{ my: 6 }}>
                                <Typography sx={{ fontSize: '24px', marginBlock: 3 }} variant='h6'>Most Popular Flights</Typography>
                                <Grid m={0} mt={'18px'} container spacing={2}>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Box sx={{ display: 'flex', padding: 2, borderRadius: '5px', boxShadow: '0px 0px 2px grey' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <Box>
                                                    <Typography variant='body' component={'h3'}>Mumbai - Goa</Typography>
                                                    <Typography variant='body' >after 4 days</Typography>

                                                </Box>
                                                <MenuArrowIcon sx={{ transform: "rotate(270deg)" }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', padding: 2, borderRadius: '5px', boxShadow: '0px 0px 2px grey' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Box>
                                                    <Typography variant='body' component={'h3'}>Odisha  - New Delhi</Typography>
                                                    <Typography variant='body' >after 2days</Typography>

                                                </Box>
                                                <MenuArrowIcon sx={{ transform: "rotate(270deg)" }} />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', padding: 2, borderRadius: '5px', boxShadow: '0px 0px 2px grey' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Box>
                                                    <Typography variant='body' component={'h3'}>Bangalore - Jammu</Typography>
                                                    <Typography variant='body' >next week</Typography>

                                                </Box>
                                                <MenuArrowIcon sx={{ transform: "rotate(270deg)" }} />
                                            </Box>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={false} sm={3}>
                        <RightSection />
                    </Grid>
                    <Box sx={isMediumScreen?{ padding: '10px', ml: '5px' }:{ padding: '10px', marginLeft: '250px' }}>
                        <MiddleContentFlight />
                    </Box>
                    <Box>
                        <Footer />
                    </Box>
                </Grid>
            </Box >
        </Box>
    )
}
