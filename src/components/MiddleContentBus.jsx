import React from 'react'
import OfferHotelImg1 from '../Assets/busImg/offerBusImg1.webp'
import OfferHotelImg2 from '../Assets/busImg/offerBusImg2.webp'
import OfferHotelImg3 from '../Assets/busImg/offerBusImg3.webp'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MiddleContentBus() {

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

            <Box marginLeft={'19px'}>
                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px', marginBlock: '25px', color: '#1a1a1a' }}>
                        Why choose Cleartrip bus?</Typography>
                    <Typography variant='p' sx={{ color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        Looking for a safe, secure and trustworthy platform to book your bus tickets? Your search for a reliable bus journey
                        ends here, with over 10 lakh buses, from non A/C sleeper to Volvo buses - Cleartrip has made online bus booking easier and faster
                    </Typography>
                    <Typography variant='p' sx={{ mt: '16px', color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        Cleartrip is a customer-centric platform and we always put our customers first. With your bus reservation - there is total transparency
                        and no hidden charges. That’s not all - now you can book bus tickets with zero convenience fees and raise your concerns (if any) to our 24x7 customer support, which puts you through to a customer support agent instead of an IVR. There’s more - you can get huge discounts on your bus fare while booking your seat only on the Cleartrip app.
                    </Typography>
                    <Typography variant='p' sx={{ mt: '16px', color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        Do we need to say more? When booking bus tickets - Choose Cleartrip!
                    </Typography>

                </Box>
                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px', marginBlock: '25px', color: '#1a1a1a' }}>
                        Make your bus travel experience better</Typography>
                    <Typography variant='p' sx={{ color: '#4d4d4d', fontSize: '14px', marginBlock: '15px', lineHeight: '20px' }}>
                        Bus travel in itself is a hectic affair, and we believe bus reservations and cancellations shouldn’t be. Seamless online bus bookings,
                        cheap bus fares, zero convenience fees and a 24x7 customer helpline all account for a pleasant experience when you book a bus seat with us.
                        To ensure the best customer experience we provide a helpline service where travellers don’t have to wait in queue or talk to a bot to raise their concerns,
                        they can get in line with an agent directly to address their concerns.
                    </Typography>

                </Box>
                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px' }}>
                        How to book an online bus ticket on Cleartrip?
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                        Bus ticket booking on your App/mWeb is now as easy as it gets -
                        <ul>
                            <li>
                                Open the Cleartrip app/website
                            </li>
                            <li>
                                Click on the ‘Bus’ section
                            </li>
                            <li>
                                Enter your specifications - Source, destination & date of travel
                            </li>
                            <li>
                                Choose from a range of sleeper, A/C & Volvo buses
                            </li>

                        </ul>

                    </Typography>
                </Box>

                <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px' }}>
                        How to cancel your bus ticket?
                    </Typography>
                    <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>

                        <ul>
                            <li>
                                Cancel your bus ticket by logging in to Cleartrip's mobile application or by calling on the 24x7 helpline number
                            </li>
                            <li>
                                Any cancellation is subject to charges as mentioned on the bus ticket
                            </li>
                            <li>
                                Partial cancellation of bus tickets is not possible, you can call customer care to cancel your bus reservation and make a new bus booking
                            </li>
                            <li>
                                Modification (i.e. changing the travel date/changing the boarding/dropping point) of the tickets is not possible, please call customer care
                                to cancel the bus ticket and make a new booking
                            </li>
                        </ul>

                    </Typography>
                </Box>

                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px' }}>
                            Is it safe to book bus tickets online?</Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px' }}>
                            Booking a bus ticket online is now easy. Download the Cleartrip app and follow the steps mentioned in “How to book an online bus ticket on Cleartrip?”
                            <br />
                            Booking a bus ticket online is as safe as it gets. In fact, there are certain benefits you can enjoy when booking a bus ticket online on Cleartrip.
                            Extra discounts, zero convenience fees & much more.

                        </Typography>
                    </Box>

                    <Box sx={{ color: '#4d4d4d', marginBlock: '25px', mt: '50px', fontSize: '14px', maxWidth: '100%', flexGrow: 1, flexBasis: 0 }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px' }}>
                            Is there any discount offers available for bus booking ?
                        </Typography>
                        <Typography variant='p' sx={{ display: 'block', marginBlock: '16px', lineHeight: '20px' }}>
                            Yes, explore all the bus ticket booking offers with Cleartrip. In addition, Cleartrip offers extra discounts, zero convenience fees & much more.
                        </Typography>
                    </Box>
            </Box>
        </Grid>
    )
}
