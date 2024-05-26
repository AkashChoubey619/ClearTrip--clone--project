import React from 'react'
import Goa from '../Assets/goaImg.jpg'
import Delhi from '../Assets/delhiImg.jpg'
import Bangalore from '../Assets/bangaloreImg.webp'
import OfferHotelImg1 from '../Assets/hoteldiscount1.webp'
import OfferHotelImg2 from '../Assets/hoteldiscount2.webp'
import OfferHotelImg3 from '../Assets/hoteldiscount3.webp'
import RatingLogo from '../Assets/Trending_hotels/Ratinglogo.svg'
import FullRating from '../Assets/Trending_hotels/fullrating.svg'
import HalfRating from '../Assets/Trending_hotels/Halfratinglogo.svg'
import TopHotel1 from '../Assets/Trending_hotels/topHotel1.webp'
import TopHotel2 from '../Assets/Trending_hotels/topHotel2.jpg'
import TopHotel3 from '../Assets/Trending_hotels/topHotel3.jpg'
import TopHotel4 from '../Assets/Trending_hotels/topHotel4.webp'
import TopHotel5 from '../Assets/Trending_hotels/topHotel5.webp'
import TopHotel6 from '../Assets/Trending_hotels/topHotel6.webp'
import TopHotel7 from '../Assets/Trending_hotels/topHotel7.jpeg'
import TopHotel8 from '../Assets/Trending_hotels/topHotel8.webp'
import TopHotel9 from '../Assets/Trending_hotels/topHotel9.webp'
import TrendingImg1 from '../Assets/trending_gateways/Goa_1.jpg'
import TrendingImg2 from '../Assets/trending_gateways/Goa_2.jpg'
import TrendingImg3 from '../Assets/trending_gateways/Goa_3.jpg'
import TrendingImg4 from '../Assets/trending_gateways/Ooty1.webp'
import TrendingImg5 from '../Assets/trending_gateways/Ooty2.jpg'
import TrendingImg6 from '../Assets/trending_gateways/Ooty3.webp'
import TrendingImg7 from '../Assets/trending_gateways/Manali1.jpg'
import TrendingImg8 from '../Assets/trending_gateways/Manali2.webp'
import TrendingImg9 from '../Assets/trending_gateways/Manali3.jpg'
import Pattaya from '../Assets/PattayaImg.webp'
import Jaipur from '../Assets/JaipurImg.jpg'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MiddleContentHotel() {
    const hotelName = ['Cacoon Hotel', 'Country Inn & Suit...', 'Radisson Blu Udai...', 'Aamby Valley City', 'The Pride Hotel',
        'The Park Kolkata', 'Purple Palm ', 'Golden Tulip Goa', 'Ramada Plaza']

    const trendingHotel1=[TrendingImg1,TrendingImg4,TrendingImg7];
    const trendingHotel2=[TrendingImg2,TrendingImg5,TrendingImg8];
    const trendingHotel3=[TrendingImg3,TrendingImg6,TrendingImg9];

    const trendingTitle=['Best Hotels In Goa','Couple friendly hotels in Ooty','Hill view hotels in Manali'];
    const trendingSubTitle=['3051 properties available','530 properties available','1198 properties available'];

    const cityName = ['Pune', 'Ghaziabaad', 'Udaipur', 'Lonavala', 'Chennai', 'Kolkata', 'Coorg', 'Goa', 'Mumbai']

    const hotelImg = [TopHotel1, TopHotel2, TopHotel3, TopHotel4, TopHotel5, TopHotel6, TopHotel7, TopHotel8, TopHotel9]
    return (
        <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: "flex-start", padding: '25px' }} >
            <Grid item xs={12}>
                {/* Image Grid */}
                <Grid container spacing={3} pr={'15px'}>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferHotelImg1} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferHotelImg2} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Link to="#">
                            <img src={OfferHotelImg3} style={{ width: '100%' }} alt='offer_image' className="offer-image" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' sx={{ fontSize: '24px', fontWeight: 500, color: '#333' }} >Popular destination</Typography>
                <Grid container mt={'10px'} spacing={4}>
                    <Grid item xs={6} sm={2.2}>
                        <Link to="#">
                            <img src={Goa} alt='offer_image' style={{ width: '184px', height: '235px', borderRadius: '8px' }} className="destination-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.2}>
                        <Link to="#">
                            <img src={Bangalore} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.2}>
                        <Link to="#">
                            <img src={Jaipur} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.2}>
                        <Link to="#">
                            <img src={Pattaya} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={2.2}>
                        <Link to="#">
                            <img src={Delhi} style={{ width: '184px', height: '235px', borderRadius: '8px' }} alt='offer_image' className="destination-image" />
                        </Link>
                    </Grid>
                </Grid>
                <Box sx={{ mt: '52px' }}>
                    <Typography variant='h5' sx={{ mb: '25px', fontWeight: 500 }} >Top trending Hotels</Typography>
                    <Grid container spacing={3}>
                        {[...Array(9).keys()].map((index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className='topHotels' sx={{ display: 'flex', alignItems: 'space-between', gap: '10px' }}>
                                    <Link to='#'> <img src={hotelImg[index]} style={{ borderRadius: '6px', width: '115px', height: '112px', marginRight: '10px' }} alt={`topRatedHotels-${index}`} /></Link>
                                    <Box className='middleSectionRatingHotel' sx={{ marginBlock: '2px', height: '122px', width: '189px', flexWrap: 'nowrap' }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '16px', paddingBlock: '6px' }}>{hotelName[index]}</Typography>
                                        <Typography sx={{ fontWeight: 500, fontSize: '14px', color: 'grey' }}>{cityName[index]}</Typography>
                                        <Box sx={{ display: 'flex', mt: '30px', gap: '6px' }}>
                                            <img src={RatingLogo} width={'26px'} alt='ratingLogo' />
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {[...Array(5).keys()].map((i) => (
                                                    <Link to='#'> <img key={i} src={i < 4 ? FullRating : HalfRating} width={'15px'} height={'15px'} alt={`ratingCircle-${index}-${i}`} /></Link>
                                                ))}
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mt: '52px' }}>
                    <Typography variant='h5' sx={{ mb: '25px', fontWeight: 500 }} >Top trending Hotels</Typography>
                    <Grid container spacing={3}>
                        {[...Array(3).keys()].map((index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{display:'flex',flexDirection:'row',borderRadius:'8px',gap:'3px'}}>
                                    <Box>
                                        <img src={trendingHotel1[index]} style={{width:'178px',height:'192px',borderRadius:'8px 0px 0px 8px'}} alt='trending_gateways_img' />
                                    </Box>
                                    <Box>
                                        <Box> <img src={trendingHotel2[index]} style={{width:'135px',height:'94px',borderRadius:'0px 8px 0px 0px'}} alt='trending_gateways_img' /></Box>
                                        <Box> <img src={trendingHotel3[index]} style={{width:'135px',height:'94px',borderRadius:'0px 0px 8px 0px'}} alt='trending_gateways_img' /></Box>
                                    </Box>
                                </Box>
                                <Typography sx={{fontWeight:500,fontSize:'16px',mt:2}}>{trendingTitle[index]}</Typography>
                                <Typography sx={{fontWeight:500,fontSize:'14px',color:'grey'}}>{trendingSubTitle[index]}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
            <Box marginLeft={'19px'}>
                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px', marginBlock: '25px', color: '#1a1a1a' }}>
                        Why book hotels online on Cleartrip?</Typography>
                    <Typography variant='p' sx={{ color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        Looking for online hotel booking sites? Your search ends here. From guest houses to resorts, from budget-friendly to luxury,
                        whether for business or for leisure, Cleartrip is your go-to hotel booking app. Our curated, verified list of 400000+ hotels
                        across 28000+ cities from around the globe ensures you have enough options to choose from and complete your online hotel booking
                        at ease. Find a list of hotel chains such as oyo rooms, fabhotels, treebo hotels, etc. Seamlessly book hotels in Delhi, hotels in Mumbai,
                        <span style={{ color: '#36c' }}> hotels in Bangalore, hotels in Goa</span> and many more.
                        <br />With an array of filters and sorting options, you can simplify the search for your hotel room booking. It shows all the details of your preferred hotel,
                        like description, highlights, photos, amenities, room types, rates all in one place.
                        Additional features like pay-at-hotel, express checkout and free cancellations make the process of booking a hotel effortless.
                    </Typography>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>How to find and book hotels online on Cleartrip?</Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            With Cleartrip, booking a hotel online doesn't get simpler.
                            <ul>
                                <li>
                                    Click on the 'hotels' tab on the homepage
                                </li>
                                <li>
                                    Type in the city/ locality/ landmark/ hotel name in the search bar
                                </li>
                                <li>
                                    Fill in the check-in and check-out dates
                                </li>
                                <li>
                                    Choose the number of travellers and hit enter
                                </li>

                            </ul>
                            There you go! You can further narrow down your hotel booking search list by using filters like price, star rating, traveller rating, amenities
                            and even preferences like hill-view or couple friendly hotels. For every kind of stay, Cleartrip has a hotel.
                        </Typography>
                    </Box>

                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                            How to Search for cheap hotels on Cleartrip?
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                            Cleartrip offers never-seen-before discounts on hotels, making your luxurious stay pocket-friendly.
                            <ul>
                                <li>
                                    Once you search for your preferred location or city, you can use an array of filters to refine your search.
                                </li>
                                <li>
                                    Enter the price range for your hotel room booking and get options accordingly.
                                </li>
                                <li>
                                    Compare, choose and complete your hotel booking by clicking on the 'Book Now' button.
                                </li>
                            </ul>
                            So go ahead and book that long-awaited staycation, friends' trip, family holiday, or just a much-needed weekend getaway! Cleartrip has got you covered.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                            What are the best offers available for hotel booking on Cleartrip?</Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Here are some unmissable deals on hotel bookings. Use the mentioned coupon codes when you make your hotel
                            booking and get exciting discounts.
                            <ul style={{ color: '#36c' }}>
                                <li>
                                    5-20% Off Upto INR 4,000/- on Domestic and International Hotels - CTHOTEL
                                </li>
                                <li>
                                    Flat 25% off on Hotels with AU Bank Credit Card - AUFETS
                                </li>
                                <li>
                                    Great deals that run all year round, so you can book whenever you wish!
                                </li>
                                <li>
                                    10% Off Upto INR 4,000/- on International Hotels - CTINTL
                                </li>

                            </ul>

                        </Typography>
                    </Box>

                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '24px' }}>
                            What are the benefits of booking hotels on Cleartrip?
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                            Booking hotels online with Cleartrip is as seamless as it can get.
                            <ul >
                                <li>
                                    Diverse range of hotels - from pocket-friendly to luxury                            </li>
                                <li>
                                    Best offers using bank cards like Axis, ICICI, Kotak, Slice, Bank of Baroda, CITI, Federal, etc.                            </li>
                                <li>
                                    Wallet cashbacks on Paytm and Mobikwik   </li>
                                <li>
                                    Exciting deals and discounts throughout the year
                                </li>
                                <li>
                                    Cancellation policies in case of last minute changes
                                </li>
                                <li>
                                    Upgrades on your stay
                                </li>
                                <li>
                                    EMI options
                                </li>
                            </ul>

                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
