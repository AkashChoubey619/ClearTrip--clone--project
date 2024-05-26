import { Box, Button, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Slider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProfileIcon from '@mui/icons-material/AccountCircleSharp';
import { Link, useNavigate } from 'react-router-dom';
import HeadLogo from '../../Assets/clearTrip_logo.png'
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem } from '@mui/base/MenuItem';
import Trips from '@mui/icons-material/CardTravelTwoTone';
import ShortList from '@mui/icons-material/FavoriteTwoTone';
import Traveler from '@mui/icons-material/AirportShuttleTwoTone';
import Wallet from '@mui/icons-material/AccountBalanceWalletTwoTone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import HiiFive from '@mui/icons-material/WavingHandTwoTone';
import ExpressWay from '@mui/icons-material/PublishTwoTone';
import Profile from '@mui/icons-material/PersonOutlineTwoTone';
import Settings from '@mui/icons-material/SettingsTwoTone';
import Cancel from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import TimeIcon from '@mui/icons-material/HourglassTopTwoTone';
import TagIcon from '@mui/icons-material/Loyalty';
import DiamondIcon from '@mui/icons-material/DiamondOutlined';
import JackpotIcon from '@mui/icons-material/MonetizationOnOutlined';
import BestIcon from '@mui/icons-material/StarsOutlined';
import ChangeFlight from '@mui/icons-material/ShuffleTwoTone';
import Print from '@mui/icons-material/ReceiptOutlined';
import Calender from '../../Assets/calendar.png'
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles.css'
import { Modal as BaseModal } from '@mui/base/Modal';
import { styled, css } from '@mui/system';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import clsx from 'clsx';
import LoginImg1 from '../../Assets/Login/LoginImg1.webp'
import LoginImg2 from '../../Assets/Login/LoginImg2.webp'
import LoginImg3 from '../../Assets/Login/LoginImg3.webp'
import CircularProgress from '@mui/material/CircularProgress';



export default function HotelNavigation({ setSearchHotelName, setSort, setFilter }) {
    const [anchorEl, setAnchorEl] = React.useState(true);
    const [sorting, setSorting] = useState(null);
    const [rating, setRating] = useState(null);
    const [modalToggle, setModalToggle] = useState('signUp');
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem( "token" ):null)
    const [value, setValue] = React.useState([1000, 6000]);
    const searchHotelInfo = localStorage.getItem('searchHotel') ? JSON.parse(localStorage.getItem("searchHotel")) : '';
    const [city, setCity] = useState(searchHotelInfo[0]);
    const [presentDate, setPresentDate] = useState(new Date());
    const myData = localStorage.getItem("userData");
    const name = myData && myData.name;
    const navigate = useNavigate();

    const tomorrow = new Date(); // Create a new Date object
    tomorrow.setDate(tomorrow.getDate() + 1); // Adjust it to represent tomorrow's date 
    const [tomorrowDate, setTomorrowDate] = useState(tomorrow); // Set tomorrow's date as initial state

    const handleDateChangeTomorrow = (date) => {
        setTomorrowDate(date);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDateChange = (date) => {
        setPresentDate(date);
    };

    const handleRatingApply = () => {
        setFilter(Number(rating))
        handleClose()
    }
    const handleSortingApply = () => {
        setSort(Number(sorting))
        handleClose()
    }
    const handlePriceApply = () => {
        setFilter(value)
        handleClose()
    }
    const handleClickOptions = () => {
        navigate("/options")
        handleClose()
    }
    const handleOnUpdate = () => {
        if (city) {
            const searchData = [city, presentDate, tomorrowDate];
            localStorage.setItem("searchHotel", JSON.stringify(searchData));
            setSearchHotelName(searchData[0]);
        }
    };

    const [openModal, setOpenModal] = React.useState(false);
    const images = [
        LoginImg1, LoginImg2, LoginImg3
    ]
    const handleOpenModal = () => { setOpenModal(true), console.log(true) };
    const handleCloseModal = () => { setOpenModal(false) };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
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
    const [url, setUrl] = useState('https://academics.newtonschool.co/api/v1/bookingportals/signup')
    const handleLoginSignUp = async () => {
        setIsLoading(true)
        try {
            if (modalToggle === 'login') {
                const loginUrl = 'https://academics.newtonschool.co/api/v1/bookingportals/login';
                setUrl(loginUrl)
                console.log(url)
                let res = await fetch(loginUrl,
                    {
                        method: 'POST',
                        body: JSON.stringify({ email: userEmail, password: userPassword, appType: "bookingportals" }),
                        headers: {
                            "Content-Type": "application/json",
                            projectId: 'iwf86zcsd7tk'
                        }
                    })

                if (res.ok) {
                    const data = await res.json();
                    console.log('login success', data)
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userData", data.data);
                    setUserEmail('')
                    setUserPassword('')
                    setUserName('')
                    setIsLogin(false)
                    setToken(localStorage.getItem('token'))
                    handleCloseModal()
                } else {
                    setIsLogin(true)
                    console.log('login error', res.ok);
                }

            }
            else {
                let res = await fetch(url,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            "name": userName,
                            "email": userEmail,
                            "password": userPassword,
                            appType: "bookingportals"
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            projectId: 'iwf86zcsd7tk'
                        }
                    })

                if (res.ok) {
                    const data = await res.json();
                    console.log('signUp success', data)
                    setIsLogin(false)
                    setUserEmail('')
                    setUserPassword('')
                    setUserName('')
                    setModalToggle('login')

                } else {
                    setIsLogin(true)
                    console.log('signUp error', res.ok);
                }

            }

            setIsLoading(false)

        } catch (err) { console.error(err) }

    }
    useEffect(() => {
        // Logic to execute when token is added or removed
        console.log('Token added or removed');
    }, [token]);

    const handleRemoveToken = () => {
        localStorage.removeItem("token");
        setToken(null)
        console.log('Token removed!');
    };


    return (
        <>
            <div style={{ boxShadow: '0px 0px 10px #e5eaf2', padding: '20px 5%' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }} >
                    <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '22px',
                            height: '24px'
                        }}>
                            <img src={HeadLogo} style={{ width: '100%', borderRadius: '5px' }} alt='clearTrip_logo' />

                        </div>
                        <Typography sx={{ color: '#f77728', fontWeight: 600, pr: '14px' }} variant='h5' component={'h4'}>
                            cleartrip</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', boxShadow: '0px 0px 2px grey', paddingInline: '18px', borderRadius: '8px' }}>
                            <Box id='searchBarHotel'>
                                <LocationIcon sx={{ width: '26px', height: '26px', color: 'grey', fontWeight: 500 }} />
                                <input type='text' value={city} onChange={(e) => setCity(e.target.value.toLowerCase())} style={{ fontSize: '16px', fontWeight: 500, width: '120px', border: 'none', outline: 'none', fontWeight: 500 }}
                                    placeholder='Search city' />
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={Calender} alt="calendar" style={{ height: '19px', width: '18px', marginLeft: '10px' }} />
                                <DatePicker
                                    id="presentDateSingle"
                                    selected={presentDate}
                                    value={presentDate}
                                    onChange={handleDateChange}
                                    dateFormat="E, MMM d"
                                    placeholderText="Select date"
                                    className="custom-datepickerSearched" // Add your custom class for styling
                                />
                                <Divider sx={{ height: '48', marginTop: '4px' }} orientation='vertical' flexItem />
                                <DatePicker
                                    id="presentDateRound"
                                    selected={tomorrowDate}
                                    onChange={handleDateChangeTomorrow}
                                    dateFormat="E, MMM d"
                                    placeholderText="Return"
                                    className="custom-datepickerSearched" // Add your custom class for styling
                                />
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box>
                                <Dropdown>
                                    <MenuButton>
                                        <a to={'/'}>
                                            <Button
                                                sx={{
                                                    textTransform: 'none', color: 'lightgrey', gap: '7px'
                                                }}
                                                onClick={handleClick}
                                            >
                                                <span style={{ color: 'black', fontSize: '15px' }}>1 Room 2 Adults</span></Button>
                                        </a>
                                    </MenuButton>
                                    <Menu slots={{ listbox: AnimatedListbox }}>
                                        <MenuItem onClick={handleClose}><div style={roomListName}>1 Room 1 Adult</div></MenuItem>
                                        <MenuItem onClick={handleClose}><div style={roomListName}>2 Room 4 Adult</div></MenuItem>
                                        <MenuItem onClick={handleClose}><div style={roomListName}>1 Room 2 Adult</div></MenuItem>
                                        <MenuItem onClick={handleClose}><div style={roomListName}> 2 Room 6 Adult</div></MenuItem>

                                    </Menu>
                                </Dropdown>
                            </Box>

                        </Box>
                        {city !== searchHotelInfo[0] && <Button variant='contained' sx={{
                            textTransform: 'none', background: '#f77728', color: 'white', borderRadius: '8px',
                            ml: 1, p: '8px 16px', '&:hover': { background: 'rgb(206, 69, 1)' }
                        }} onClick={handleOnUpdate}>
                            Update</Button>}
                    </Box>
                    {!token ? <Box>
                        <Button sx={{
                            borderRadius: '6px', fontSize: '14px', fontWeight: 500, textTransform: 'none',
                            color: 'white', p: '4px 12px', background: '#36c', height: '40px', '&:hover': { background: '#254eaf' }
                        }} onClick={handleOpenModal}>
                            Log in / Sign in
                        </Button>

                    </Box>
                        : <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Dropdown>
                                    <MenuButton>
                                        <a to={'/'}>
                                            <Button
                                                sx={{
                                                    textTransform: 'none', color: 'lightgrey', gap: '7px',
                                                    '&:hover': { color: 'blue' }
                                                }}
                                                onClick={handleClick}
                                            ><ProfileIcon sx={{ height: '20px', width: '20px' }} />
                                                <span style={{ color: 'black' }}>My account</span></Button>
                                        </a>
                                    </MenuButton>
                                    <Menu slots={{ listbox: AnimatedListbox }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBlock: '8px' }}>
                                            {name}</div>
                                        <Divider flexItem />
                                        <Stack direction={'row'} color={'gray'} mb={1} fontWeight={500} spacing={4}>
                                            <Box >
                                                <Typography variant='body2'
                                                    sx={{
                                                        marginLeft: '7px',
                                                        py: '12px',
                                                        color: 'lightgray',
                                                        fontSize: '12px'
                                                    }}
                                                >Account</Typography>
                                                <MenuItem onClick={handleClickOptions}><Trips /> <div style={ListName}>Trips</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><ShortList />  <div style={ListName}>Shortlists</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><Traveler />  <div style={ListName}>Travelers</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><Wallet />  <div style={ListName}>Cleartrip Wallet</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><HiiFive />  <div style={ListName}>Hi-Five</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><ExpressWay />  <div style={ListName}>Expressway</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><Profile />  <div style={ListName}>Profile</div></MenuItem>
                                                <MenuItem onClick={handleClickOptions}><Settings />  <div style={ListName}>Settings</div></MenuItem>
                                            </Box>
                                            <Box >
                                                <Typography variant='body2'
                                                    sx={{
                                                        marginLeft: '7px',
                                                        py: '12px',
                                                        color: 'lightgray',
                                                        fontSize: '12px'
                                                    }}
                                                >Quick tools</Typography>
                                                <MenuItem sx={{ color: '#36c', fontWeight: 400 }} onClick={handleClickOptions}>
                                                    <Cancel /> <div style={ListName}>Cancellation</div></MenuItem>
                                                <MenuItem sx={{ color: '#36c', fontWeight: 400 }} onClick={handleClickOptions}>
                                                    <ChangeFlight /> <div style={ListName}>Change flight</div></MenuItem>
                                                <MenuItem sx={{ color: '#36c', fontWeight: 400 }} onClick={handleClickOptions}>
                                                    <Print /> <div style={ListName}>Print ticket</div></MenuItem>
                                                <MenuItem sx={{ color: '#36c', fontWeight: 400 }} onClick={handleClickOptions}>
                                                    <Print /> <div style={ListName}>Print hotel voucher</div></MenuItem>
                                            </Box>
                                        </Stack>
                                        <Divider flexItem />
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                            <Button onClick={() => localStorage.removeItem("token")} sx={{ textTransform: 'none', color: '#f77728', borderRadius: '10px' }}>
                                                Sign out</Button>
                                        </Box>

                                    </Menu>
                                </Dropdown>

                            </Box>
                        </Box>}
                        <Modal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={openModal}
                    onClose={handleCloseModal}
                    slots={{ backdrop: StyledBackdrop }}
                >
                    <ModalContent sx={{ width: "58%", height: '72%', boxSizing: 'border-box' }}>
                        <Grid sx={{ height: '100%' }} container>
                            <Grid sx={{ height: '100%', background: 'rgb(255, 141, 113)' }} item xs={12} sm={6}>
                                <Slider {...settings}>
                                    {images.map((image, imgIndex) => (
                                        <div key={imgIndex}>
                                            <img src={image} alt={`image${imgIndex}`} loading="lazy"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </Slider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ p: '4px 16px' }}>
                                    <Box sx={{ py: 1, display: 'flex', alignItems: "center", gap: '12px' }}>
                                        <Typography onClick={() => setModalToggle('signUp')}
                                            sx={modalToggle === 'signUp' ? { background: '#e7f9ff', color: '#36c', fontWeight: 500, fontSize: '14px', p: 1, borderRadius: '6px', letterSpacing: '1px' } :
                                                { background: 'white', color: '#36c', fontWeight: 500, fontSize: '14px', p: 1, cursor: 'pointer', letterSpacing: '1px' }}>
                                            Sign-up</Typography>
                                        <Typography onClick={() => setModalToggle('login')}
                                            sx={modalToggle === 'login' ? { background: '#e7f9ff', color: '#36c', fontWeight: 500, fontSize: '14px', p: 1, borderRadius: '6px', letterSpacing: '1px' } :
                                                { background: 'white', color: '#36c', fontWeight: 500, fontSize: '14px', p: 1, cursor: 'pointer', letterSpacing: '1px' }}>Login</Typography>
                                    </Box>
                                    <Box sx={{ height: '14px', color: 'red', display: 'block' }}>
                                        {isLogin && <span>Invalid userId/Password</span>}
                                    </Box>
                                    <Box>
                                        {modalToggle === 'signUp' ? (<form>
                                            <label style={{ marginBottom: '4px', fontWeight: 600, display: 'block', fontSize: '12px', letterSpacing: '1px' }} for='name'>Username</label>
                                            <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} style={{
                                                padding: '12px', display: 'block', width: '100%', border: '1px solid grey', outline: 'none',
                                                boxSizing: 'border-box', marginBottom: '8px', borderRadius: '6px'
                                            }}
                                                id='name' placeholder='Enter your name' required />
                                            <label style={{ marginBottom: '4px', fontWeight: 600, display: 'block', fontSize: '12px', letterSpacing: '1px' }} for='email'>Email</label>
                                            <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type='email' style={{
                                                padding: '12px', display: 'block', width: '100%', border: '1px solid grey', outline: 'none',
                                                boxSizing: 'border-box', marginBottom: '8px', borderRadius: '6px'
                                            }}
                                                id='name' placeholder='Enter your email id' required />
                                            <label style={{ marginBottom: '4px', fontWeight: 600, display: 'block', fontSize: '12px', letterSpacing: '1px' }} for='password'>Password</label>
                                            <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} style={{
                                                padding: '12px', display: 'block', width: '100%', border: '1px solid grey', outline: 'none',
                                                boxSizing: 'border-box', marginBottom: '8px', borderRadius: '6px'
                                            }}
                                                id='password' placeholder='Enter your name' required />
                                            <Button onClick={() => handleLoginSignUp()} sx={{
                                                textTransform: 'none', width: '100%', my: 2,
                                                background: 'black', color: 'white', fontSize: '14px', '&:hover': { background: '#2c2828' }
                                            }}>
                                                {isLoading ? <CircularProgress style={{ height: '25px', width: '25px', color: 'white' }} /> : 'sign-up'}
                                            </Button>

                                        </form>) : (
                                            <form>
                                                <label style={{ marginBottom: '4px', fontWeight: 600, display: 'block', fontSize: '12px', letterSpacing: '1px' }} for='email'>Email</label>
                                                <input type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} style={{
                                                    padding: '12px', display: 'block', width: '100%', border: '1px solid grey', outline: 'none',
                                                    boxSizing: 'border-box', marginBottom: '8px', borderRadius: '6px'
                                                }}
                                                    id='name' placeholder='Enter your email id' required />
                                                <label style={{ marginBottom: '4px', fontWeight: 600, display: 'block', fontSize: '12px', letterSpacing: '1px' }} for='password'>Password</label>
                                                <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} style={{
                                                    padding: '12px', display: 'block', width: '100%', border: '1px solid grey', outline: 'none',
                                                    boxSizing: 'border-box', marginBottom: '8px', borderRadius: '6px'
                                                }}
                                                    id='password' placeholder='Enter your name' required />
                                                <Button onClick={() => handleLoginSignUp()} sx={{
                                                    textTransform: 'none', width: '100%', my: 2,
                                                    background: 'black', color: 'white', fontSize: '14px', '&:hover': { background: '#2c2828' }
                                                }}>
                                                    {isLoading ? <CircularProgress style={{ height: '25px', width: '25px', color: 'white' }} /> : 'sign-in'}
                                                </Button>

                                            </form>
                                        )}
                                        <Typography sx={{ fontSize: '10px', py: 1 }}>
                                            We no more support email based login. You can now login via mobile number & link
                                            email to access your account.</Typography>

                                    </Box>
                                    <Divider sx={{ my: 1, width: '100%' }} orientation="horizontal" flexItem />
                                    <Typography sx={{ color: 'grey', fontWeight: 500, fontSize: '11px' }}>
                                        By continuing, you agree to Cleartrip's privacy policy &
                                        terms of use.
                                    </Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </ModalContent>
                </Modal>
                </Box>
                {/* secondRow of navbar */}

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
                    <Box sx={{ minWidth: 120 }}>
                        <Typography
                            style={{
                                minWidth: 100, m: 0, fontWeight: 500, fontSize: '14px',
                                border: 'none', textTransform: 'none', color: '#36c'
                            }}

                        >
                            All Filters
                        </Typography>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Dropdown>
                            <MenuButton sx={{ borderRadius: '25px', border: '1px solid black', gap: '4px', mr: 2 }}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', paddingInline: 1, fontSize: '14px' }}>
                                    Sort by: Recommended <ExpandMoreIcon />
                                </Typography>
                            </MenuButton>
                            <Menu slots={{ listbox: AnimatedListbox }}>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        sx={{ p: 1, width: '100%' }}
                                    >
                                        <FormControlLabel value={0} onChange={(e) => setSorting(e.target.value)} control={<Radio />} label="Recommended" />
                                        <FormControlLabel value={2} onChange={(e) => setSorting(e.target.value)} control={<Radio />} label="Top-rated" />
                                        <FormControlLabel value={-1} onChange={(e) => setSorting(e.target.value)} control={<Radio />} label="Price: High to Low" />
                                        <FormControlLabel value={1} onChange={(e) => setSorting(e.target.value)} control={<Radio />} label="Price: Low to High" />
                                        <Button variant='contained'
                                            sx={{ color: 'white', background: 'black', width: '100%', mt: 1, p: 1, textTransform: 'none' }}
                                            onClick={() => handleSortingApply()}
                                        >
                                            Apply
                                        </Button>
                                    </RadioGroup>

                                </FormControl>

                            </Menu>
                        </Dropdown>
                        <Dropdown>
                            <MenuButton sx={{ borderRadius: '25px', border: '1px solid black', gap: '4px', mr: 2 }}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', paddingInline: 1, fontSize: '14px' }}>
                                    Price <ExpandMoreIcon />
                                </Typography>
                            </MenuButton>
                            <Menu slots={{ listbox: AnimatedListbox }}>
                                <FormControl sx={{ p: 1, width: 'calc(100% - 2px)', boxSizing: 'border-box', overflowX: 'hidden' }}>

                                    <Typography sx={{
                                        fontWeight: 500, color: 'white', background: 'black'
                                        , m: '10px auto', width: '150px', borderRadius: '25px', textAlign: 'center', p: '6px'
                                    }}>
                                        ₹ {value[0]} - ₹{value[1]}
                                    </Typography>

                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        size='small'
                                        value={value}
                                        onChange={handleChange}
                                        min={500}
                                        max={12000}
                                        sx={{ boxSizing: 'border-box', mt: 2, color: 'black' }}
                                    />

                                    <Button variant='contained'
                                        sx={{ color: 'white', background: 'black', width: '100%', mt: 1, p: 1, textTransform: 'none' }}
                                        onClick={() => handlePriceApply()}
                                    >
                                        Apply
                                    </Button>

                                </FormControl>

                            </Menu>
                        </Dropdown>
                        <Dropdown>
                            <MenuButton sx={{ borderRadius: '25px', border: '1px solid black', gap: '4px', mr: 2 }}>
                                <Typography
                                    sx={{ display: 'flex', alignItems: 'center', paddingInline: 1, fontSize: '14px' }}
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Rating <ExpandMoreIcon />
                                </Typography>
                            </MenuButton>
                            <Menu
                                slots={{ listbox: AnimatedListbox }}
                                aria-labelledby="rating-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <FormControl id='rating' sx={{ width: 'calc(100% - 17px)', boxSizing: 'border-box' }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="5-star"
                                        name="radio-buttons-group"
                                        sx={{ p: 1, width: '100%' }}
                                    >
                                        <FormControlLabel value="5" onChange={(e) => setRating(e.target.value)} control={<Radio />} label="5 - Star" />
                                        <FormControlLabel value="4" onChange={(e) => setRating(e.target.value)} control={<Radio />} label="4 - Star" />
                                        <FormControlLabel value="3" onChange={(e) => setRating(e.target.value)} control={<Radio />} label="3 - Star" />
                                        <Button
                                            variant='contained'
                                            sx={{ color: 'white', background: 'black', width: '100%', mt: 1, p: 1, textTransform: 'none' }}
                                            onClick={handleRatingApply} // Call handleRatingApply function
                                        >
                                            Apply
                                        </Button>
                                    </RadioGroup>
                                </FormControl>
                            </Menu>
                        </Dropdown>

                    </Box>

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', p: '8px 14px', mr: 2, border: '1px solid lightgrey', borderRadius: '8px' }}>
                        <TimeIcon sx={{ p: '5px', background: '#ECF9Fb', borderRadius: '8px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'rgb(26, 26, 26)' }}>Last minute deals</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'grey' }}>Best Price Guarantee</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', p: '8px 14px', mr: 2, border: '1px solid lightgrey', borderRadius: '8px' }}>
                        <JackpotIcon sx={{ p: '5px', background: 'pink', borderRadius: '8px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'rgb(26, 26, 26)' }}>Jackpot deals</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'grey' }}>25% above</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', p: '8px 14px', mr: 2, border: '1px solid lightgrey', borderRadius: '8px' }}>
                        <DiamondIcon sx={{ p: '5px', background: '#F2FAF0', borderRadius: '8px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'rgb(26, 26, 26)' }}>Premium deals</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'grey' }}>Min 10% off</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', p: '8px 14px', mr: 2, border: '1px solid lightgrey', borderRadius: '8px' }}>
                        <TagIcon sx={{ p: '5px', background: 'lightgrey', borderRadius: '8px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'rgb(26, 26, 26)' }}>Steal deals</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'grey' }}>10%-25% off</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', p: '8px 14px', mr: 2, border: '1px solid lightgrey', borderRadius: '8px' }}>
                        <BestIcon sx={{ p: '5px', background: 'lightgreen', borderRadius: '8px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'rgb(26, 26, 26)' }}>Best deals</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'grey' }}>35% off on pre - payment</Typography>
                        </Box>
                    </Box>
                </Box>
            </div>

        </>
    )
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const ListName = {
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4px'

}
const roomListName = {
    fontFamily: 'Roboto, sans-serif',
    display: 'flex', fontWeight: 500, paddingLeft: '15px',
    alignItems: 'center', marginInline: 'auto',
    marginLeft: '4px', lineHeight: '20px', letterSpacing: '1px'

}

const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 240px;
    border-radius: 8px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    z-index: 1;
  
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
    
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
    `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);

    if (popupContext == null) {
        throw new Error(
            'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
        );
    }

    const verticalPlacement = popupContext.placement.split('-')[0];

    return (
        <CssTransition
            className={`placement-${verticalPlacement}`}
            enterClassName="open"
            exitClassName="closed"
        >
            <Listbox {...other} ref={ref} />
        </CssTransition>
    );
});

AnimatedListbox.propTypes = {
    ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    display:flex;
    alignItems:center;
    
    padding: 5px;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    `,
);

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 8px;
    color: white;
    text-transform: none;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: none;
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
    `,
);
const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'base-Backdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);
