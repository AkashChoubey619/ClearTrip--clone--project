import React, { useEffect, useState } from 'react'
import Navigation from '../components/BookingNavigation'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { usePeopleContext } from '../Context/MainContext';
import { useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import AirplaneSingleToneIcon from '@mui/icons-material/AirplaneTicketTwoTone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divide from '../Assets/OtherLogos/Divider'


export default function PaymentFlight() {
    const { flightId,setNavigate } = usePeopleContext();
    const token=localStorage.getItem("token")
    const navigate = useNavigate();
    const [openModal, setOpenModal] = React.useState(false);
    const flightData = JSON.parse(localStorage.getItem("searchFlight"))
    const Trip = flightData && flightData?.[4];
    const firstInput = flightData && flightData?.[0];
    const secondInput = flightData && flightData?.[1];
    const myDataString = localStorage.getItem('userData');
    const myData = JSON.parse(myDataString);
    const [oneWayData, setOneWayData] = useState([]);
    const [roundTripData, setRoundTripData] = useState([]);
    const [preName, setPreName] = useState('');
    const [coupon, setCoupon] = useState('coupon');
    const [myName, setMyName] = useState(myData.user&&myData.user.name || '');
    const [myGmail, setMyGmail] = useState(myData.user&&myData.user.email || '');
    const tomorrow = new Date(); // Create a new Date object
    tomorrow.setDate(tomorrow.getDate() + 1); // Adjust it to represent tomorrow's date 
    const timestamp1 = new Date()
    const timestamp2 = tomorrow;

    const day1 = timestamp1.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
    const day2 = timestamp2.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
    const formattedDate1 = `${timestamp1.toLocaleDateString('en-US', { month: 'long' }).slice(0, 3)} ${timestamp1.getDate()}`;
    const formattedDate2 = `${timestamp2.toLocaleDateString('en-US', { month: 'long' }).slice(0, 3)} ${timestamp2.getDate()}`;
    const formattedTime1 = timestamp1.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
    const formattedTime2 = timestamp2.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

    console.log(typeof Trip, 'inputs')
    // console.log(firstInput, secondInput, 'inputs', flightId && flightId[0]?.flightId1, flightId)
    console.log(flightData, 'flights')

    let apiUrl1 = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId && flightId[0]?.flightId1}`;
    let apiUrl2 = `https://academics.newtonschool.co/api/v1/bookingportals/flight/${flightId && flightId[1]?.flightId2}`;
    const fetchFlightDetails = async () => {
        try {
            async function oneWay() {

                const response = await fetch(apiUrl1,
                    {
                        method: 'GET',
                        headers: {
                            projectId: 'iwf86zcsd7tk'
                        }
                    });

                if (response.ok) {
                    const data = await response.json();
                    setOneWayData(data.data);
                    console.log('oneWay data error', data.data);
                } else {
                    console.log('oneWay data error', response);
                    alert("Failed to load the flight details.");
                }
            }

            async function roundTrip() {

                const response = await fetch(apiUrl2,
                    {
                        method: 'GET',
                        headers: {
                            projectId: 'iwf86zcsd7tk'
                        }
                    });

                if (response.ok) {
                    const data = await response.json();
                    setRoundTripData(data.data);
                } else {
                    console.log('roundTrip data error', response);
                }
            }

            await oneWay();
            await roundTrip();
        } catch (error) {
            console.log('flightData', error);
        }
    }
    const handleConfirmPayment=()=>{
        if(token){
            navigate('/confirmedPayment')
        }else{
            setOpenModal(true)
        }
    }


    useEffect(() => {
        fetchFlightDetails()
        setNavigate('flight')
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <Navigation openModal={openModal} setOpenModal={setOpenModal} />
            <Box>
                {flightId && flightId[0]?.flightId1 ? <Box sx={{ p: '24px 5%' }}>
                    <Grid container spacing={3}>
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
                                {oneWayData && <Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: '6px' }}>
                                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
                                            {firstInput && firstInput.city}</Typography>
                                        <EastIcon />
                                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{secondInput && secondInput.city}</Typography>
                                        <Typography sx={{ fontSize: '16px' }}>{day1},{formattedDate1}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ textAlign: 'center', pr: 3 }}>
                                            <AirplaneSingleToneIcon sx={{ fontSize: '2.5rem' }} />
                                            <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                {oneWayData && typeof oneWayData.flightID === 'string' && oneWayData.flightID?.split("-")[0]}
                                            </Typography>
                                            <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                {oneWayData && typeof oneWayData.flightID === 'string' && oneWayData.flightID?.split("-")[1]}
                                            </Typography>
                                            <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                AirLine
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Divide />
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '12px', pl: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                    {oneWayData && oneWayData?.departureTime}
                                                </Typography>
                                                <Typography sx={{ fontSize: '16px' }}>
                                                    {oneWayData && oneWayData?.source}
                                                </Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                                                    {firstInput && firstInput?.name},Terminal
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', py: '2px' }}>
                                                <AccessTimeIcon sx={{ fontSize: '1.5rem' }} />
                                                <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                    {oneWayData && oneWayData?.duration} : 00h
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                    {oneWayData && oneWayData?.arrivalTime}
                                                </Typography>
                                                <Typography sx={{ fontSize: '16px' }}>
                                                    {oneWayData && oneWayData?.destination}
                                                </Typography>
                                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                                                    {secondInput && secondInput?.name},Terminal
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>}
                            </Box>
                            {
                                Trip === "roundTrip" && <Box sx={{ p: 3, boxShadow: '0px 0px 2px grey', borderRadius: '10px', mt: 2 }}>
                                    {roundTripData && <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, gap: '6px' }}>
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
                                                {secondInput && secondInput.city}</Typography>
                                            <EastIcon />
                                            <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{firstInput && firstInput.city}</Typography>
                                            <Typography sx={{ fontSize: '16px' }}>{day2},{formattedDate2}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box sx={{ textAlign: 'center', pr: 3 }}>
                                                <AirplaneSingleToneIcon sx={{ fontSize: '2.5rem' }} />
                                                <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                    {roundTripData && typeof roundTripData.flightID === 'string' && roundTripData.flightID?.split("-")[0]}
                                                </Typography>
                                                <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                    {roundTripData && typeof roundTripData.flightID === 'string' && roundTripData.flightID?.split("-")[1]}
                                                </Typography>
                                                <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 500 }}>
                                                    AirLine
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Divide />
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '12px', pl: 2 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                        {roundTripData && roundTripData?.departureTime}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '16px' }}>
                                                        {roundTripData && roundTripData?.source}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                                                        {secondInput && secondInput?.name},Terminal
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', py: '2px' }}>
                                                    <AccessTimeIcon sx={{ fontSize: '1.5rem' }} />
                                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                        {roundTripData && roundTripData?.duration} : 00h
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                                                        {roundTripData && roundTripData?.arrivalTime}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '16px' }}>
                                                        {roundTripData && roundTripData?.destination}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                                                        {firstInput && firstInput?.name},Terminal
                                                    </Typography>
                                                </Box>

                                            </Box>
                                        </Box>
                                    </Box>}
                                </Box>
                            }
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
                                        <Box sx={{ p: '16px 20px', width: '100%', background: 'rgb(255, 241, 236)', borderRadius: '8px', boxSizing: 'border-box' }}>
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
                                        <Typography sx={{ fontSize: '15px',fontWeight:500 }}>Total price</Typography>
                                        {oneWayData&& Trip === "roundTrip"&&roundTripData?
                                        <Typography sx={{ fontSize: '18px',fontWeight:500 }}>₹{oneWayData&&roundTripData&&Math.floor(oneWayData.ticketPrice+roundTripData.ticketPrice)}</Typography>
                                        :
                                        <Typography sx={{ fontSize: '18px',fontWeight:500 }}>₹{oneWayData&&Math.floor(oneWayData.ticketPrice)}</Typography>
                                        }
                                        
                                    </Box>
                                    <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '12px',color:'grey' }}>1 adult</Typography>
                                    </Box>

                                    <Divider sx={{ my: 3 }} orientation='horizontal' flexItem />
                                    <Box >
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontSize: '14px',color:'grey' }}>Base fare</Typography>
                                            <Typography sx={{ fontSize: '14px' }}>
                                                ₹1,200</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontSize: '14px',color:'grey' }}>Taxes and fees</Typography>
                                            <Typography sx={{ fontSize: '14px' }}>
                                            {oneWayData&&roundTripData&&Math.floor((oneWayData.ticketPrice+roundTripData.ticketPrice)-800)}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography sx={{ fontSize: '14px',color:'grey' }}>Medi-cancel benefit</Typography>
                                            <Typography sx={{ fontSize: '14px' }}>
                                                <span style={{textDecoration:'line-through'}}>₹199</span> Free</Typography>
                                        </Box>
                                        

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
                    </Grid>
                </Box> : <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <WarningAmberIcon sx={{ fontSize: "7rem", color: 'cyan' }} />
                        <Typography sx={{ fontWeight: 500, fontSize: '16px', color: 'grey', mt: 2 }}>No data Found PLease go back</Typography>
                    </Box>
                </Box>}
            </Box>

        </div>
    )
}
