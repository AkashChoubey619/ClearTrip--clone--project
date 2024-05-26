import { Box, Divider, Typography, Grid, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RatingLogo from '../Assets/Trending_hotels/Ratinglogo.svg'
import FullRating from '../Assets/Trending_hotels/fullrating.svg'
import BlurDotsIcon from '@mui/icons-material/BlurOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/BookingNavigation'

import { usePeopleContext } from '../Context/MainContext';


export default function PaymentHotel() {
    const { hotelData,setNavigate } = usePeopleContext();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = React.useState(false);
    const token = localStorage.getItem('token');
    const myHotel=[hotelData._id, hotelData.name, hotelData.location,hotelData.rating]
    const hotelInfo = localStorage.getItem('searchHotel')
    const myDataString = localStorage.getItem('userData');
    const myData = JSON.parse(myDataString);
    const [preName, setPreName] = useState('');
    const [coupon, setCoupon] = useState('coupon');
    const [myName, setMyName] = useState(myData.user&&myData.user.name || '');
    const [myGmail, setMyGmail] = useState(myData.user&&myData.user.email || '');
    console.log(myData,myData.user.email,myData.user.name)
    const rating = Math.floor(hotelData.rating)
    const ratingArray = Array.from({ length: rating }).fill(null)
    console.log( 'data',hotelData, Object.keys(hotelData).length > 0,Array.isArray(hotelData),typeof hotelData)

    const timestamp1 = new Date(hotelInfo[1]);
    const timestamp2 = new Date(hotelInfo[2]);

    const formattedDay1 = timestamp1.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
    const formattedDate1 = `${timestamp1.toLocaleDateString('en-US', { month: 'long' }).slice(0, 3)} ${timestamp1.getDate()}`;
    const formattedTime1 = timestamp1.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

    // Format date and time for the second timestamp
    const formattedDay2 = timestamp2.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
    const formattedDate2 = `${timestamp2.toLocaleDateString('en-US', { month: 'long' }).slice(0, 3)} ${timestamp2.getDate()}`;
    const formattedTime2 = timestamp2.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

    const handleConfirmPayment=()=>{
        if(token){
            navigate('/confirmedPayment')
        }else{
            setOpenModal(true)
        }
    }

    useEffect(() => { 
        setNavigate('hotel')
        window.scrollTo(0, 0)
     }, [])

    return (
        <div>
            <Navigation openModal={openModal} setOpenModal={setOpenModal} />
            <Box sx={{ p: '24px 5%' }}>
                {hotelData && Object.keys(hotelData).length > 0?<Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Box sx={{ my: 3, display: 'flex', alignItems: "center", gap: '18px' }} >
                            <Typography sx={{
                                fontSize: '22px', height: '30px', width: '30px', p: 'auto',
                                borderRadius: '50%', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                1</Typography>
                            <Typography sx={{ fontSize: '26px', fontWeight: 500 }}>Review your itinerary</Typography>
                        </Box>
                        <Box sx={{ p: 3, boxShadow: '0px 0px 2px grey', borderRadius: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box >
                                    <Typography sx={{ fontSize: '16px', color: 'grey', lineHeight: '26px', pb: 1 }}>
                                        {hotelData && hotelData.rating}-star hotel in {hotelData && hotelData.location}
                                    </Typography>
                                    <Typography sx={{ fontSize: '32px', fontWeight: 500, lineHeight: '40px', py: 1 }}>
                                        {hotelData && hotelData.name}
                                    </Typography>
                                </Box>
                                <Box>
                                    {hotelData.images && hotelData.images.length > 0 && <img src={hotelData.images[0]} style={{
                                        width: 120,
                                        height: 100, objectFit: 'cover', borderRadius: '4px'
                                    }} alt='hotelImg' />}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={RatingLogo} style={{ width: 28, paddingInline: '2px' }} alt='ratingLogo' />
                                <Box>
                                    {
                                        ratingArray.map((_, index) => (
                                            <img key={index} style={{ width: 16 }} src={FullRating} alt="Circle Icon" />
                                        ))
                                    }</Box>
                            </Box>
                            <Divider sx={{ borderBottom: '1px dashed grey', my: 3 }} />
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            Check-in
                                        </Typography>
                                        <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: 500 }}>
                                            {formattedDate1}</Typography>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            {formattedDay1}&nbsp;{formattedTime1}
                                        </Typography>

                                    </Box>
                                    <Typography sx={{
                                        width: '64px', height: '24px', background: '#f3f3f3', color: '#808080', textAlign: 'center', borderRadius: '4px',
                                        fontSize: '12px', fontWeight: 500
                                    }} >
                                        1 night
                                    </Typography>
                                    <Box>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            Check-out
                                        </Typography>
                                        <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: 500 }}>
                                            {formattedDate2}</Typography>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            {formattedDay2}&nbsp;{formattedTime2}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Divider sx={{ p: 2, height: '40px', marginBlock: 'auto' }} orientation='vertical' flexItem />
                                <Box>
                                    <Box sx={{ pl: 2 }}>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            Room & Guests
                                        </Typography>
                                        <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: 500 }}>
                                            1 Room, 2 Guests</Typography>
                                        <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: 'grey' }}>
                                            2 adults
                                        </Typography>

                                    </Box>

                                </Box>

                            </Box>

                        </Box>

                        {/* hotelDetails */}

                        <Box sx={{ my: 3 }}>
                            <Typography sx={{ py: 2, fontWeight: 500, fontSize: '24px' }}>House, 1 Queen Bed, View</Typography>
                            <Box >
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '22px' }}>
                                    <Box>
                                        {hotelData.images && hotelData.images.length > 0 && <img src={hotelData.images[0]} style={{
                                            width: 184,
                                            height: 106, objectFit: 'cover', borderRadius: '4px'
                                        }} alt='hotelImg' />}
                                    </Box>
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px',flexWrap:'wrap' }}>
                                            <Typography sx={{
                                                display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', p: '6px 10px', borderRadius: '30px'
                                                , background: 'rgb(243, 243, 243)'
                                            }}> <BlurDotsIcon /> 1 Queen bed</Typography>
                                            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', p: '6px 10px', borderRadius: '30px', background: 'rgb(243, 243, 243)' }}>
                                                <BlurDotsIcon /> Smoking policy – non-smoking available</Typography>
                                            {hotelData&&hotelData.amenities && hotelData.amenities.map((item, index) => (
                                                <Typography key={index} sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', p: '6px 10px', borderRadius: '30px', background: 'rgb(243, 243, 243)' }}>
                                                    <BlurDotsIcon />{item}</Typography>
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', width: '250px', py: 2 }}>
                                            <CheckIcon sx={{ fontSize: '22px', color: '#1a1a1a' }} />
                                            <Typography sx={{ color: '#1a1a1a', fontSize: '16px' }}>Breakfast</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', width: '250px', py: 2 }}>
                                            <CheckIcon sx={{ fontSize: '22px', color: '#1a1a1a' }} />
                                            <Typography sx={{ color: '#1a1a1a', fontSize: '16px' }}>Free self parking</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', width: '250px', py: 2 }}>
                                        <CheckIcon sx={{ fontSize: '22px', color: '#1a1a1a' }} />
                                        <Typography sx={{ color: '#1a1a1a', fontSize: '16px' }}>Free Wifi</Typography>
                                    </Box>
                                </Box>
                                    </Box>

                                </Box>
                                


                            </Box>
                        </Box>
                        <Divider sx={{ my: 4 }} orientation='horizontal' flexItem />
                        <Box >
                            <Typography sx={{ fontSize: '16px', color: 'grey', letterSpacing: '1px' }}>
                                This special discounted rate is non-refundable. If you choose to cancel this booking, you will not be refunded any of the payment.
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontWeight: '14px', fontWeight: 500 }}>Cancel between</Typography>
                                <Box sx={{ width: '76%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{formattedDate1},{formattedTime1}</Typography>
                                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{formattedDate2},{formattedTime2}</Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', background: 'red', height: '6px', borderRadius: '8px' }}></Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: '3px' }}>
                                <Typography sx={{ fontWeight: '14px', fontWeight: 500 }}>Amount refundable</Typography>
                                <Box sx={{ width: '76%', display: 'flex', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '12px' }}>No refund</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ my: 3, display: 'flex', alignItems: "center", gap: '18px' }} >
                                <Typography sx={{
                                    fontSize: '22px', height: '30px', width: '30px', p: 'auto',
                                    borderRadius: '50%', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                }}>
                                    2</Typography>
                                <Typography sx={{ fontSize: '26px', fontWeight: 500, mt: 1 }}>Guest details</Typography>

                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: "center", my: 3 }}>
                                    <Typography onClick={() => setPreName('mr')}
                                        sx={preName === 'mr' ? { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', border: '1px solid black', background: 'rgb(243, 243, 243)', ml: 1 } :
                                            { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', cursor: 'pointer' }}>
                                        Mr.</Typography>
                                    <Typography onClick={() => setPreName('mrs')}
                                        sx={preName === 'mrs' ? { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', border: '1px solid black', background: 'rgb(243, 243, 243)', ml: 1 } :
                                            { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', ml: 1, cursor: 'pointer' }}>
                                        Mrs.</Typography>
                                    <Typography onClick={() => setPreName('ms')}
                                        sx={preName === 'ms' ? { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', border: '1px solid black', background: 'rgb(243, 243, 243)', ml: 1 } :
                                            { p: '6px 10px', borderRadius: '30px', boxShadow: '0px 0px 2px grey', fontSize: '14px', ml: 1, cursor: 'pointer' }}>
                                        Ms.</Typography>
                                </Box>
                                <form>
                                    <Box sx={{ my: 4 }}>
                                        <input type='text' style={{
                                            height: '48px', p: 2, fontWeight: 500, fontSize: '16px', border: 'none', boxShadow: '0px 0px 2px grey',
                                            borderRadius: '8px', paddingInline: '14px', width: '50%', outline: 'none'
                                        }}
                                            placeholder="Enter userName" value={myName} onChange={(e) => setMyName(e.target.value)} />
                                    </Box>
                                    <Box sx={{ my: 3 }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '16px', color: 'grey', my: '5px' }}>
                                            Booking details will be sent to this number and email address
                                        </Typography>
                                        <input type='text' style={{
                                            height: '48px', p: 2, fontWeight: 500, fontSize: '16px', border: 'none', boxShadow: '0px 0px 2px grey',
                                            borderRadius: '8px', paddingInline: '14px', width: '50%', outline: 'none'
                                        }}
                                            placeholder="Enter userName" value={myGmail} onChange={(e) => setMyGmail(e.target.value)} />
                                    </Box>
                                    <Box sx={{ p: '16px 20px', width: '100%', background: 'rgb(255, 241, 236)', borderRadius: '8px' }}>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>
                                            PLEASE NOTE: Special requests are not guaranteed, but the property will make every effort to accommodate your needs</Typography>
                                    </Box>
                                    <Button onClick={()=>handleConfirmPayment()} sx={{ textTransform: 'none', minWidth: '210px', background: 'rgb(255, 79, 23)', my: 3, px: 2, borderRadius: '8px', '&:hover': { background: 'rgb(206, 69, 1)' } }}
                                        variant="contained" >Confirm payment</Button>
                                </form>

                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ borderRadius: '8px', boxShadow: '0px 0px 2px grey' }}>
                            <Box sx={{ p: 2, }}>
                                <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Price breakup</Typography>
                                <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '14px' }}>1 room x 1 night</Typography>
                                    <Typography sx={{ fontSize: '14px' }}>₹{hotelData && Math.floor(hotelData.avgCostPerNight)}</Typography>
                                </Box>
                                <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '14px' }}>Hotel taxes</Typography>
                                    <Typography sx={{ fontSize: '14px' }}>₹{hotelData && Math.floor((hotelData.avgCostPerNight * 5) / 100)}</Typography>
                                </Box>

                                <Divider sx={{ my: 3 }} orientation='horizontal' flexItem />
                                <Box >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Total</Typography>
                                        <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                            ₹{hotelData && Math.floor((hotelData.avgCostPerNight + (hotelData.avgCostPerNight * 5) / 100))}</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>1 room · 1 night</Typography>

                                </Box>
                            </Box>
                            <Box sx={{ p: 2, display: 'flex', background: 'rgb(255, 241, 236)', gap: '10px' }}>
                                <CalendarMonthIcon />
                                <Box>
                                    <Typography sx={{ fontSize: '12px', color: 'grey' }}>Pay in 6 interest free EMIs</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 500, my: '4px' }}>at ₹3,442/mo</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 500, color: 'grey' }}>with your credit card</Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{ my: 3, p: 2, borderRadius: "8px", boxShadow: '0px 0px 2px grey' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                Save more with Flipkart SuperCoins
                            </Typography>
                            <Box sx={{ my: 1 }}>
                                <Typography sx={{ fontSize: '14px' }}>
                                    Login to save up to 8% on every deal
                                </Typography>
                                <Typography sx={{ fontSize: '14px' }}>
                                    ₹250 and earn up to refer
                                </Typography>
                                <Typography sx={{ fontSize: '14px' }}>
                                    100 (=₹100)
                                </Typography>

                            </Box>

                        </Box>
                        <Box sx={{ my: 3, p: 2, borderRadius: "8px", boxShadow: '0px 0px 2px grey' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                Apply coupon or gift card
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', height: '48px', my: 2, background: 'rgb(243, 243, 243)', borderRadius: '20px' }}>
                                <Typography onClick={() => setCoupon('coupon')} sx={coupon === 'coupon' ? { fontSize: '14px', p: '6px 10px', width: '50%', height: '24px', borderRadius: '20px', background: 'white' } :
                                    { fontSize: '14px', p: '6px 10px', width: '50%', height: '24px', cursor: 'pointer' }}>
                                    Coupon
                                </Typography>
                                <Typography onClick={() => setCoupon('giftCard')} sx={coupon === 'giftCard' ? { fontSize: '14px', p: '6px 10px', width: '50%', height: '24px', borderRadius: '20px', background: 'white' } :
                                    { fontSize: '14px', p: '6px 10px', width: '50%', height: '24px', cursor: 'pointer' }}>
                                    Gift card
                                </Typography>

                            </Box>

                            <Box sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px', cursor: 'not-allowed',
                                borderRadius: '8px', boxShadow: '0px 0px 2px grey', height: '42px'
                            }}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: 'grey' }}>Coupon code</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: 'grey' }}>Apply</Typography>
                            </Box>
                            <Divider sx={{ my: 3 }} orientation='horizontal' flexItem />

                        </Box>
                    </Grid>
                </Grid>:<Box sx={{display:'flex',justifyContent:'center',mt:6}}>
                            <Box sx={{textAlign:'center'}}>
                                <WarningAmberIcon sx={{fontSize:"7rem",color:'cyan'}}/>
                                <Typography sx={{fontWeight:500,fontSize:'16px',color:'grey',mt:2}}>No data Found PLease go back</Typography>
                            </Box>
                    </Box>}

            </Box>

        </div>
    )
}
