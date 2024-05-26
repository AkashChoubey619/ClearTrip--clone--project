import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import { usePeopleContext } from '../Context/MainContext';

export default function () {
  const { flightId,setNavigate, navigate } = usePeopleContext();
  const hotelId = localStorage.getItem('getId');
  const token = localStorage.getItem('token')
  const [bookingData, setBookingData] = useState([]);
  
  useEffect(() => {
    if (navigate === 'flight') {
      const handleBookFlight = async () => {
        try {
          const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/booking`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              projectId: 'iwf86zcsd7tk',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              "bookingType": "flight",
              "bookingDetails": {
                "flightId": flightId[0]?.flightId1,
                "startDate": "2023-10-09T10:03:53.554+00:00",
                "endDate": "2023-10-09T10:03:53.554+00:00"
              }
            })
          });
          const data = await res.json();
          console.log(data)
          setBookingData(data)
        } catch (error) {
          console.log('flight-Booking-Error', error)
        }
      }
      handleBookFlight();
    } else {
      const handleBookHotel = async () => {
        try {
          const res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/booking`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              projectId: 'iwf86zcsd7tk',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              "bookingType": "hotel",
              "bookingDetails": {
                "hotelId": hotelId,
                "startDate": "2023-10-09T10:03:53.554+00:00",
                "endDate": "2023-10-09T10:03:53.554+00:00"
              }
            })
          });
          const data = await res.json();
          setBookingData(data)
          console.log(data)
        } catch (error) {
          console.log('flight-Booking-Error', error)
        }
      }
      handleBookHotel();

    }
  }, [])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {flightId && navigate === 'flight' || hotelId && navigate === 'hotel' ?
        <Box sx={{display:'flex',justifyContent:"center"}}>
          {flightId && navigate === 'flight' ?
            <Box sx={{ textAlign: 'center', p: 2, borderRadius: "6px", boxShadow: "0px 0px 3px grey", maxWidth: '55%' }}>
              <h1 style={{ color: 'rgb(255, 79, 23)', textShadow: '0px 0px 10px grey' }}>Thank You...!</h1>
              <h2 style={{ color: 'rgb(255, 79, 23)' }}>{bookingData && bookingData.message} visit again</h2>
              <p style={{ fontWeight: 500, fontSize: '14px' }}>Flight details : Hey..! {bookingData.booking && bookingData.booking.user.name
              } you have booked <span style={{ color: 'blue', fontSize: '14px', fontWeight: 600 }}>{bookingData.booking && bookingData.booking.flight.airline.name}</span>&nbsp;
                flight from <span style={{ color: 'blue', fontSize: '14px', fontWeight: 600 }}>{bookingData.booking && bookingData.booking.flight.source}</span>&nbsp;
                to <span style={{ color: 'blue', fontSize: '14px', fontWeight: 600 }}>{bookingData.booking && bookingData.booking.flight.destination}</span> and your booking status is confirmed stay safe happy journey..!</p>
              <Link to={'/'}>return to home page</Link>
            </Box> :
            <Box sx={{ textAlign: 'center', p: 2, borderRadius: "6px", boxShadow: "0px 0px 3px grey", maxWidth: '55%' }}>
              <h1 style={{ color: 'rgb(255, 79, 23)', textShadow: '0px 0px 2px grey' }}>Thank You...!</h1>
              <h2 style={{ color: 'rgb(255, 79, 23)' }}>{bookingData && bookingData.message} visit again</h2>
              <p style={{ fontWeight: 500, fontSize: '14px' }}>Flight details : Hey..! {bookingData.booking && bookingData.booking.user.name
              } you have booked <span style={{ color: 'blue', fontSize: '14px', fontWeight: 600 }}>{bookingData.booking && bookingData.booking.hotel.name}</span>&nbsp;
                at <span style={{ color: 'blue', fontSize: '14px', fontWeight: 600 }}>{bookingData.booking && bookingData.booking.hotel.location}</span>&nbsp;
                and your booking status is confirmed ,contact hotel management for reconfirmation & enjoy services..!</p>
              <Link to={'/'}>return to home page</Link>
            </Box>
          }</Box> :
        <Box sx={{ textAlign: 'center', p: 2, borderRadius: "6px", boxShadow: "0px 0px 3px grey", minWidth: '150px' }}>
          <ClearIcon />
          <h3>Error : Page not found</h3>
          <p style={{ fontWeight: 500 }}>May be some technical issue or you entered wrong address</p>
          <Link to={'/'}>return to home page</Link>
        </Box>
      }

    </div>
  )
}
