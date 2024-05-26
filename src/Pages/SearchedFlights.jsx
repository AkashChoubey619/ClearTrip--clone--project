import { Box, Divider, Grid } from '@mui/material'
import Navigation from '../components/SearchedFlights/FlightNavigation'
import React, { useEffect, useState } from 'react'
import FilterSectionFlight from '../components/SearchedFlights/FilterSectionFlight'
import OfferForFlights from '../components/SearchedFlights/OfferForFlights';
import AllSearchedFlights from '../components/SearchedFlights/AllSearchedFlights';

export default function SearchedFlights() {

  const flightDetails = JSON.parse(localStorage.getItem("searchFlight"))
  const [city1,setCity1] = useState(flightDetails[0].iata_code)
  const [city2,setCity2] = useState( flightDetails[1].iata_code)
  const [oneWayDetails, setOneWayDetails] = useState([]);
  const [roundTripDetails, setRoundTripDetails] = useState([]);
  const [price, setPrice] = useState({ starts: null, end: null });
  const [departure, setDeparture] = useState({ starts: null, end: null });
  const [stops, setStops] = useState(null);
  const way = flightDetails[4]
  const timestamp1 = new Date(flightDetails[2])
  const timestamp2 = new Date(flightDetails[3])

  const day1 = timestamp1.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);
  const day2 = timestamp2.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3);

  console.log('price ', price, 'departure', departure, 'stops', stops)
  let apiUrl1 = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${city1}","destination":"${city2}"}&day=${day1}`;
  let apiUrl2=`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${city2}","destination":"${city1}"}&day=${day2}`;
  const fetchFlightDetails = async () => {
    try {
      async function oneWay() {
        let url = apiUrl1
        const filterParams = [];
        if (price.starts !== null && price.end !== null) {
          filterParams.push(`"ticketPrice":{"$lte":"${price.end}","$gte":"${price.starts}"}`);
        }
        if (departure.starts !== null && departure.end !== null) {
          filterParams.push(`"departureTime":{"$lte":"${departure.end}","$gte":"${departure.starts}"}`);
        }
        if (stops !== null) {
          filterParams.push(`"stops":${stops}`);
        }
        if(stops||departure.end||price.end){
        url += `&filter={${filterParams.join(',')}}`}
        console.log('oneWay data error', url);
        const response = await fetch(url,
          {
            method: 'GET',
            headers: {
              projectId: 'iwf86zcsd7tk'
            }
          });

        if (response.ok) {
          const data = await response.json();
          setOneWayDetails(data.data);
          console.log('oneWay data error', url);
        } else {
          console.log('oneWay data error', response);
        }
      }

      async function roundTrip() {
        let url = apiUrl2
        const filterParams = [];
        if (price.starts !== null && price.end !== null) {
          filterParams.push(`"ticketPrice":{"$lte":"${price.end}","$gte":"${price.starts}"}`);
        }
        if (departure.starts !== null && departure.end !== null) {
          filterParams.push(`"departureTime":{"$lte":"${departure.end}","$gte":"${departure.starts}"}`);
        }
        if (stops !== null) {
          filterParams.push(`"stops":${stops}`);
        }
        if(stops||departure.end||price.end){
        url += `&filter={${filterParams.join(',')}}`}
        const response = await fetch(url,
          {
            method: 'GET',
            headers: {
              projectId: 'iwf86zcsd7tk'
            }
          });

        if (response.ok) {
          const data = await response.json();
          setRoundTripDetails(data.data);
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

  console.log(city1,city2,flightDetails,'cities')


  useEffect(() => {
    fetchFlightDetails()
    window.scrollTo(0, 0);
  }, [stops,price,departure,city1,city2])


  return (
    <div>
      <Box>
        <Navigation flightDetails={flightDetails} setCity1={setCity1} setCity2={setCity2} />
      </Box>
      <Grid container spacing={2} style={{ padding: "10px 3.5%" }}>
        <Grid item xs={12} sm={3}>
          <FilterSectionFlight setPrice={setPrice} setDeparture={setDeparture} setStops={setStops} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <OfferForFlights />
          <Divider sx={{ width: '80%', m: '18px auto' }} orientation='horizontal' flexItem />
          <AllSearchedFlights oneWayDetails={oneWayDetails} roundTripDetails={roundTripDetails} way={way} />
        </Grid>

      </Grid>
    </div>
  )
}
