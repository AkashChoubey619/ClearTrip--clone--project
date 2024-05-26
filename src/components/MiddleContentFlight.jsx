import React from 'react'
import Banner from '../Assets/playStoreBanner.webp'
import Goa from '../Assets/goaImg.jpg'
import Delhi from '../Assets/delhiImg.jpg'
import Bangalore from '../Assets/bangaloreImg.webp'
import OfferFlightImg1 from '../Assets/OfferFlightImg1.jpg'
import OfferFlightImg2 from '../Assets/OfferFlightImg2.jpg'
import OfferFlightImg3 from '../Assets/OfferFlightImg3.jpg'
import Pattaya from '../Assets/PattayaImg.webp'
import Jaipur from '../Assets/JaipurImg.jpg'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MiddleContentFlight() {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: "flex-start", padding: '25px' }} >
            <Grid item xs={12}>
                {/* Image Grid */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferFlightImg1} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferFlightImg2} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferFlightImg3} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {/* Banner */}
                <Link to="#">
                    <img src={Banner} style={{ width: '100%', marginBlock: '35px' }} alt='banner' className="banner-image" />
                </Link>
            </Grid>
            <Grid container spacing={4}>
                
                <Grid item xs={12}>
                <Typography variant='h5' sx={{ fontSize: '24px', fontWeight: 500, color: '#333' }} >
                    Popular destination
                </Typography>
            </Grid>
                <Grid item xs={12} sm={2.2}>
                    <Link to="#">
                        <img src={Goa} alt='offer_image' style={{ width: '184px', height: '235px', borderRadius: '8px' }} className="destination-image" />
                    </Link>
                </Grid>
                <Grid item xs={12} sm={2.2}>
                    <Link to="#">
                        <img src={Bangalore} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                    </Link>
                </Grid>
                <Grid item xs={12} sm={2.2}>
                    <Link to="#">
                        <img src={Jaipur} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                    </Link>
                </Grid>
                <Grid item xs={12} sm={2.2}>
                    <Link to="#">
                        <img src={Pattaya} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                    </Link>
                </Grid>
                <Grid item xs={12} sm={2.2}>
                    <Link to="#">
                        <img src={Delhi} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                    </Link>
                </Grid>
            </Grid>
            <Box marginLeft={'19px'}>
                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px', marginBlock: '25px', color: '#1a1a1a' }}>
                        Why Cleartrip?</Typography>
                    <Typography variant='p' sx={{ color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        It is no longer an uphill battle to get the lowest airfare and book tickets online. Cleartrip is all
                        about making travel  <span style={{ fontWeight: 600, color: '#1a1a1a' }}>easy</span>, <span style={{ fontWeight: 600, color: '#1a1a1a' }}>affordable</span>
                        and <span style={{ fontWeight: 600, color: '#1a1a1a' }}>simple</span>. From <span style={{ fontWeight: 600, color: '#1a1a1a' }}>international</span>
                        flights to <span style={{ fontWeight: 600, color: '#1a1a1a' }}>domestic</span> flights;
                        from early morning flights to late night flights, from cheap flights to luxurious ones. Cleartrip helps
                        you complete your flight booking in just a few clicks. Your online flight booking experience is
                        seamless with our features like:
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        <span style={{ fontWeight: 600, color: '#1a1a1a' }}>ClearChoice Max:</span> Free cancellation or rescheduling for domestic (up to 24 hrs before departure)
                        & international flights (up to 72 hrs before departure).
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        <span style={{ fontWeight: 600, color: '#1a1a1a' }}>ClearChoice Plus:</span> Free date change or airline change up to 12 hrs (up to 24 hours for Air India*& Vistara*) before departure.
                    </Typography>
                    <Typography variant='p' >
                        <span style={{ fontWeight: 600, color: '#1a1a1a', lineHeight: '20px' }}>Medi-cancel refund:</span> Cancel your domestic flight booking easily on valid medical grounds and get up to ₹3500 against
                        airline cancellation charges per passenger per segment.
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        <span style={{ fontWeight: 600, color: '#1a1a1a' }}>International travel insurance:</span> Get stress-free coverage against a vast range of uncertainties for all international
                        destinations at only ₹89 per user per day.
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        And with our <span style={{ fontWeight: 600, color: '#1a1a1a' }}>round-the-clock customer service</span>, we ensure no queries or concerns regarding your flight tickets
                        are left unresolved.
                    </Typography>
                </Box>

                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>How to search and book cheap flights on Cleartrip?</Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                        Looking for flights and booking flight tickets is simple and seamless on Cleartrip.
                    </Typography>
                    <Box className='subText' sx={{ display: 'block', marginBlock: '18px', marginLeft: '15px', lineHeight: '20px' }}>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '14px' }}>
                            Enter source and destination city/airport
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '14px' }}>
                            Select the date of travel
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '14px' }}>
                            Choose the number of travellers
                        </Typography>
                    </Box>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        Hit enter and there you go! You have a search list of all the flights available,
                        sorted according to price. You can further filter your search by choosing preferences
                        and filters like time, duration, number of stops, and by airlines or even look for other
                        dates simply by clicking on the calendar on the right side of the page.
                    </Typography>
                </Box>

                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                        How to make flexible flight bookings with changeable dates?
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        While making your flight booking, make sure to select the ‘ClearChoice Plus’ or ‘ClearChoice
                        Max’ option before you confirm the air ticket. At a minimal cost, this allows you to modify
                        your flight booking dates and airlines. So in case of any change in plans, Cleartrip has got
                        you covered!
                    </Typography>
                </Box>

                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px', mt: '20px' }}>
                        How to cancel flights online on Cleartrip?</Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                        In case you wish to cancel your booking due to any reason, simply -
                    </Typography>
                    <Box className='subText' sx={{ marginBlock: '18px', marginLeft: '15px', lineHeight: '20px' }}>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Select the trip you want to cancel
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Click on the “Cancellations” link
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Select the passengers to cancel the booking for. Then hit “Review cancellation”
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Review passenger selection and refund amount
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Click on “Yes, cancel now”
                        </Typography>
                    </Box>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        That’s it – you’re done! Sit back and wait for your refund that’s guaranteed to be processed within 24 hours.
                        While making your flight booking, select the ‘ClearChoice Max’ option before you confirm the air ticket, to cancel flight bookings
                        without having to pay hefty cancellation charges!
                    </Typography>
                </Box>

                <Box sx={{ color: '#4d4d4d', marginBlock: '15px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                        What are the benefits of booking flights online with Cleartrip?
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        Get the best flight fares with exciting flight offers on your air ticket when you book with Cleartrip. Unmissable sales and
                        deals like Travel Max Sale, Big Travel Sale, Cleartrip Tatkaal, etc. offer never-seen-before discounts that help you book flights at
                        affordable rates. Best flight discounts await you when you book with bank cards like ICICI, Bank of Baroda, HDFC, Axis, Kotak etc.
                    </Typography>
                </Box>
                <Box sx={{ color: '#4d4d4d', marginBlock: '15px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                        What’s more?
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                        Flight ticket booking or planning your travel is made simpler with our round trip and multicity options.
                        When you hit enter, your search list page shows the results for both onward and return in a split screen format letting you
                        choose flights in one go for a round trip. The multicity search page shows a list of complete itineraries that removes the
                        hassle of you calculating time, transfers and layovers letting you finish your online flight booking. To ensure you get the best
                        price we highlight offers, sales and other promotions on the checkout page. Post booking, our portal allows for easy cancellations
                        or amendments without having to make calls to the airlines.

                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}
