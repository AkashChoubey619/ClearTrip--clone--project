import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AirplaneSingleToneIcon from '@mui/icons-material/AirplaneTicketTwoTone';
import AirportsTwoToneIcon from '@mui/icons-material/ConnectingAirportsTwoTone';
import TakeoffTwoToneIcon from '@mui/icons-material/FlightTakeoffTwoTone';
import LandTwoToneIcon from '@mui/icons-material/FlightLandTwoTone';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import RefundIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import { useNavigate } from 'react-router-dom';
import { usePeopleContext } from '../../Context/MainContext';

export default function AllSearchedFlights({ oneWayDetails, roundTripDetails, way }) {
  const oneWay = way ? way : "roundTrip";
  const { setFlightId, setOpenModal } = usePeopleContext();
  const navigate = useNavigate();
  const userLogged = localStorage.getItem('userData')&&'';
  const [singleWay, setSingleWay] = useState(null);
  const [returnWay, setReturnWay] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFlightId, setSelectedFlightId] = useState(null);
  const [selectedFlightIdSingle, setSelectedFlightIdSingle] = useState(null);
  const [selectedFlightIdReturn, setSelectedFlightIdReturn] = useState(null);

  // console.log(singleWay, 'single', returnWay, 'round', roundTripDetails, 'oneWayDetails')


  const handleToggleDetails = (flightId) => {
    setSelectedFlightId(selectedFlightId === flightId ? null : flightId);
  };

  const handleToggleSingle = (flightId, data) => {
    setSelectedFlightIdSingle(selectedFlightId === flightId ? null : flightId);
    setSingleWay(data);
  };
  const handleToggleReturn = (flightId, data) => {
    setSelectedFlightIdReturn(selectedFlightId === flightId ? null : flightId);
    setReturnWay(data)
  };

  const handleBookFLight = (event) => {
    const userLogged = localStorage.getItem('userData');
    if(userLogged){
    setFlightId([{ flightId1: selectedFlightIdSingle, way: oneWay }, { flightId2: selectedFlightIdReturn, way: oneWay }])
    navigate("/paymentFlight")}
    else{
      event.preventDefault()
      setOpenModal(true)
    }
  }
  const handleBookSingleFLight = (id) => {
    setFlightId([{ flightId1: id, way: oneWay }, { flightId2: null, way: null }])
    navigate("/paymentFlight")
  }

  useEffect(() => {
    if (oneWayDetails && oneWayDetails.flights) {
      setSingleWay(oneWayDetails.flights[0]);
      setSelectedFlightIdSingle(oneWayDetails?.flights[0]?._id)

    }
    if (roundTripDetails && roundTripDetails.flights) {
      setReturnWay(roundTripDetails.flights[0]);
      setSelectedFlightIdReturn(roundTripDetails?.flights[0]?._id)
    }
  }, [oneWayDetails, roundTripDetails]);

  return (
    <div>
      {oneWay === 'oneWay' && oneWayDetails && oneWayDetails.flights?.length > 0 ? (
        <Box>
          {oneWayDetails && oneWayDetails.flights?.map((flight) => {
            return (
              <Box key={flight._id} sx={{ borderRadius: '10px', boxShadow: '0px 0px 2px grey', p: 3, mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <AirplaneSingleToneIcon sx={{ fontSize: '40px', }} />
                      <Typography sx={{ fontWeight: 500, fontSize: '10px', color: 'grey', textAlign: 'center' }}>
                        {
                          flight.flightID.split("-")[0]
                        }
                      </Typography>
                    </Box>
                    <Box sx={{ pl: '20px' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>
                        {flight.departureTime && flight.departureTime} - {flight.arrivalTime && flight.arrivalTime}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: 'grey', pl: '2px' }}>
                        {flight.source && flight.source} - {flight.destination && flight.destination}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '12px' }}>
                      {flight.duration && flight.duration}h 00m({flight.stops === 0 ? 'non' : flight.stops}-stop)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ pr: 2 }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '20px', textAlign: 'right' }}>
                        ₹{flight && flight.ticketPrice}</Typography>
                      <Typography sx={{ fontWeight: 500, fontSize: '12px', color: 'rgb(17, 166, 112)' }}>
                        Get at ₹{flight && Math.floor((flight.ticketPrice * 4) / 100)} with INTSAVER
                      </Typography>
                    </Box>
                    <Box>
                      <Button 
                       onClick={(event) => {
                        const userLogged = localStorage.getItem('userData');
                        if (userLogged) {
                          console.log(userLogged);
                          handleBookSingleFLight(flight._id);
                        } else {
                          event.preventDefault(); // This prevents the default navigation behavior
                          setOpenModal(true);
                          console.log('login');
                        }
                      }}
                       sx={{ width: "96px", height: '48px', background: '#ff4f17', borderRadius: '8px', '&:hover': { background: '#d4581d' } }}
                        variant="contained">Book</Button>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} orientation='horizontal' flexItem />
                <Box id={flight._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{
                    display: 'flex', alignItems: 'center',
                    background: 'rgb(243, 243, 243)', p: '4px 8px', gap: '4px',
                    height: '14px', fontSize: '10px', fontWeight: 500, borderRadius: '6px'
                  }}>
                    <RefundIcon sx={{ fontSize: '10px' }} /> Partially refundable
                  </Typography>
                  <Typography onClick={() => handleToggleDetails(flight._id)} id={flight._id}
                    sx={{ display: 'flex', alignItems: 'center', color: '#36c', fontSize: '12px', fontWeight: 500, cursor: 'pointer', gap: '4px' }}>
                    Flight details <ArrowDownIcon /></Typography>
                </Box>
                {selectedFlightId === flight._id && <Box>
                  <Typography sx={{ fontSize: '20px', fontWeight: 500, py: 2, mt: 3 }}>
                    Flight information </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, px: 1 }}>
                    <TakeoffTwoToneIcon sx={{ fontSize: '3em', color: '#36c' }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Divider sx={{ borderBottom: '2px dashed lightgrey', mx: 2 }} orientation='horizontal' flexItem />
                    </Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, py: 1 }}>
                      ({flight.stops} - stop) </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <Divider sx={{ borderBottom: '2px dashed lightgrey', mx: 2 }} orientation='horizontal' flexItem />
                    </Box>
                    <LandTwoToneIcon sx={{ fontSize: '3em', color: '#36c' }} />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, p: 1, color: 'grey' }}>
                      Description </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, p: 1 }}>
                      Flight {flight.flightID.split("-")[0]}, operated by SpiceJet, departing from
                      ({flight.source && flight.source}) at {flight.departureTime && flight.departureTime} and
                      arriving at Mumbai ({flight.destination && flight.destination})
                      at {flight.arrivalTime && flight.arrivalTime}, is a direct flight with a duration of {flight.duration && flight.duration} hours.
                      The ticket price is ₹{flight && flight.ticketPrice}, and you can get it at a discounted
                      price of ₹{flight && Math.floor((flight.ticketPrice * 4) / 100)} with INTSAVER.
                    </Typography>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500, p: 1, color: 'grey' }}>
                      Amenities </Typography>
                    <Typography sx={{ display: 'flex', fontSize: '14px', fontWeight: 500, p: 1 }}>
                      {flight.amenities && flight.amenities.map((amenities) => (
                        <Typography sx={{ fontSize: '14px', borderRadius: '20px', background: 'lightblue', p: '6px 12px', mr: 1 }}>
                          {amenities}
                        </Typography>
                      ))}
                    </Typography>
                  </Box>
                </Box>}
              </Box>)
          })
          }
        </Box>) : (
        <Box>
          {singleWay && returnWay && (
            <Box id='roundTrip' sx={{ borderRadius: '10px', boxShadow: '0px 0px 2px grey', p: 3, mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <AirplaneSingleToneIcon sx={{ fontSize: '40px', }} />
                      <Typography sx={{ fontWeight: 500, fontSize: '10px', color: 'grey', textAlign: 'center' }}>
                        {
                          singleWay.flightID.split("-")[0]
                        }
                      </Typography>
                    </Box>
                    <Box sx={{ px: '20px' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>
                        {singleWay.departureTime && singleWay.departureTime} - {singleWay.arrivalTime && singleWay.arrivalTime}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: 'grey', pl: '2px' }}>
                        {singleWay.source && singleWay.source} - {singleWay.destination && singleWay.destination}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 500, fontSize: '12px', minWidth: '110px' }}>
                        {singleWay.duration && singleWay.duration}h 00m({singleWay.stops === 0 ? 'non' : singleWay.stops}-stop)
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderBottom: '1px dashed lightgrey' }} orientation='horizontal' flexItem />
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <AirplaneSingleToneIcon sx={{ fontSize: '40px', transform: 'scaleX(-1)' }} />
                      <Typography sx={{ fontWeight: 500, fontSize: '10px', color: 'grey', textAlign: 'center' }}>
                        {
                          returnWay.flightID.split("-")[0]
                        }
                      </Typography>
                    </Box>
                    <Box sx={{ px: '20px' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>
                        {returnWay.departureTime && returnWay.departureTime} - {returnWay.arrivalTime && returnWay.arrivalTime}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: 'grey', pl: '2px' }}>
                        {returnWay.source && returnWay.source} - {returnWay.destination && returnWay.destination}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '12px', minWidth: '110px' }}>
                        {returnWay.duration && singleWay.duration}h 00m({returnWay.stops === 0 ? 'non' : returnWay.stops}-stop)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ pr: 2 }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '20px', textAlign: 'right' }}>
                      ₹{singleWay.ticketPrice + returnWay.ticketPrice}</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: '12px', color: 'rgb(17, 166, 112)' }}>
                      Get at ₹{singleWay && Math.floor((singleWay.ticketPrice + returnWay.ticketPrice * 4) / 100)} with INTSAVER
                    </Typography>
                  </Box>
                  <Box>
                    <Button onClick={(event) => handleBookFLight(event)} sx={{ width: "96px", height: '48px', background: '#ff4f17', borderRadius: '8px', '&:hover': { background: '#d4581d' } }}
                      variant="contained">Book</Button>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} orientation='horizontal' flexItem />
              <Box id={singleWay._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{
                  display: 'flex', alignItems: 'center',
                  background: 'rgb(243, 243, 243)', p: '4px 8px', gap: '4px',
                  height: '14px', fontSize: '10px', fontWeight: 500, borderRadius: '6px'
                }}>
                  <RefundIcon sx={{ fontSize: '10px' }} /> Partially refundable
                </Typography>
                <Typography onClick={() => setShowDetails(!showDetails)} id={singleWay._id}
                  sx={{ display: 'flex', alignItems: 'center', color: '#36c', fontSize: '12px', fontWeight: 500, cursor: 'pointer', gap: '4px' }}>
                  Flight details <ArrowDownIcon /></Typography>
              </Box>
              {showDetails && <Box>
                <Typography sx={{ fontSize: '20px', fontWeight: 500, py: 2, mt: 3 }}>
                  Flight information </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, px: 1 }}>
                  <AirportsTwoToneIcon sx={{ fontSize: '3em', color: '#36c' }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Divider sx={{ borderBottom: '2px dashed lightgrey', mx: 2 }} orientation='horizontal' flexItem />
                  </Box>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500, py: 1 }}>
                    ({singleWay.stops} - stop) </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500, py: 1 }}>
                    /({returnWay.stops} - stop) </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <Divider sx={{ borderBottom: '2px dashed lightgrey', mx: 2 }} orientation='horizontal' flexItem />
                  </Box>
                  <AirportsTwoToneIcon sx={{ fontSize: '3em', color: '#36c' }} />
                </Box>
                <Box sx={{ my: 2 }}>
                  <Typography sx={{ fontSize: '18px', fontWeight: 500, p: 1, color: 'grey' }}>
                    Description </Typography>
                  <Typography sx={{ fontSize: '14px', fontWeight: 500, p: 1 }}>
                    Flight ID: {singleWay.flightID.split("-")[0]} / Return: {returnWay.flightID.split("-")[0]}, operated by SpiceJet, departing from {singleWay.source && singleWay.source} at {singleWay.departureTime && singleWay.departureTime} and arriving at {singleWay.destination && singleWay.destination} at {singleWay.arrivalTime && singleWay.arrivalTime}.
                    The return flight departs from {returnWay.source && returnWay.source} at {returnWay.departureTime && returnWay.departureTime} and arrives at {returnWay.destination && returnWay.destination} at {returnWay.arrivalTime && returnWay.arrivalTime}.
                    These are direct flights with a duration of {singleWay.duration && singleWay.duration} hours for the outbound journey and {returnWay.duration && returnWay.duration} hours for the return journey.
                    The ticket price is ₹{singleWay && singleWay.ticketPrice}, and you can get it at a discounted price of ₹{singleWay && Math.floor((singleWay.ticketPrice * 4) / 100)} with INTSAVER.
                  </Typography>
                </Box>
                <Box sx={{ my: 2 }}>
                  <Typography sx={{ fontSize: '18px', fontWeight: 500, p: 1, color: 'grey' }}>
                    Amenities </Typography>
                  <Typography sx={{ display: 'flex', fontSize: '14px', fontWeight: 500, p: 1 }}>
                    {singleWay.amenities && singleWay.amenities.map((amenities) => (
                      <Typography sx={{ fontSize: '14px', borderRadius: '20px', background: 'lightblue', p: '6px 12px', mr: 1 }}>
                        {amenities}
                      </Typography>
                    ))}
                  </Typography>
                </Box>
              </Box>}
            </Box>)}
        
      
      <Grid container style={{ position: 'relative', minHeight: '300px' }} spacing={2}>
        <Grid item xs={6} >
          <Box sx={{ mt: 1, position: 'sticky', top: 4 }}>
            <Box sx={{ background: '#edebeb', p: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '6px' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Flights</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Arrival Time</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Duration</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Departure Time</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px', color: '#ff4f17' }}>₹Price</Typography>
            </Box>
          </Box>
          {oneWayDetails && oneWayDetails.flights?.map((flight) => (
            <Box id={flight._id} onClick={() => handleToggleSingle(flight._id, flight)} sx={selectedFlightIdSingle === flight._id ? {
              background: 'lightcyan', p: '14px 10px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 2px grey',
              justifyContent: 'space-between', borderRadius: '6px', my: 1, border: '1px solid #36c'
            } : {
              background: '#f7f4f4a3', p: '14px 10px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 2px grey',
              justifyContent: 'space-between', borderRadius: '6px', my: 1, cursor: 'pointer'
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <TakeoffTwoToneIcon sx={{ color: 'mediumpurple' }} />
                <Typography sx={{ fontWeight: 500, fontSize: '12px', color: 'grey' }}>{flight.flightID.split("-")[0]}</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.departureTime}</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>{flight.source}</Typography>

              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.duration}h 00m</Typography>
                <Divider orientation='horizontal' flexItem />
                <Typography sx={{ fontWeight: 500, fontSize: '12px' }}>{flight.stops} - stops</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.arrivalTime}</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>{flight.destination}</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 500, fontSize: '20px', color: '#ff4f17' }}>₹{flight.ticketPrice}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mt: 1, position: 'sticky', top: 4 }}>
            <Box sx={{ background: '#edebeb', p: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '6px' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Flights</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Arrival Time</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Duration</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>Departure Time</Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '13px', color: '#ff4f17' }}>₹Price</Typography>
            </Box>
          </Box>
          {roundTripDetails && roundTripDetails.flights?.map((flight) => (
            <Box id={flight._id} onClick={() => handleToggleReturn(flight._id, flight)} sx={selectedFlightIdReturn === flight._id ? {
              background: 'lightcyan', p: '14px 10px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 2px grey',
              justifyContent: 'space-between', borderRadius: '6px', my: 1, border: '1px solid #36c'
            } : {
              background: '#f7f4f4a3', p: '14px 10px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 2px grey',
              justifyContent: 'space-between', borderRadius: '6px', my: 1, cursor: 'pointer'
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <TakeoffTwoToneIcon sx={{ color: 'mediumpurple' }} />
                <Typography sx={{ fontWeight: 500, fontSize: '12px', color: 'grey' }}>{flight.flightID.split("-")[0]}</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.departureTime}</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>{flight.source}</Typography>

              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.duration}h 00m</Typography>
                <Divider orientation='horizontal' flexItem />
                <Typography sx={{ fontWeight: 500, fontSize: '12px' }}>{flight.stops} - stops</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{flight.arrivalTime}</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>{flight.destination}</Typography>

              </Box>
              <Box>
                <Typography sx={{ fontWeight: 500, fontSize: '20px', color: '#ff4f17' }}>₹{flight.ticketPrice}</Typography>
              </Box>
            </Box>))}
        </Grid>
      </Grid></Box>)}
    </div >
  )
}
