import { Box, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../Styles.css'

export default function FilterSectionFlight({ setPrice, setDeparture, setStops }) {
  const [rangeValue, setRangeValue] = useState(null);
  const [manageStops, setManageStops] = useState(null);
  const [prices, setPrices] = useState({ starts: null, end: null });
  const [departures, setDepartures] = useState({ starts: null, end: null });
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    setPrices({ starts: "2000", end: event.target.value })

  };
  const handleDepartureCheckboxChange = (event) => {
    // Logic to handle checkbox change
    let value1 = event.target.value.split(",")[0]
    let value2 = event.target.value.split(",")[1]
    setDepartures({ starts: value1, end: value2 })
  };
  const handleStopCheckboxChange = (event) => {
    // Logic to handle checkbox change
    const value = parseInt(event.target.value, 10);
    setManageStops(value);
    // console.log(value, 'manageStops', manageStops)
    // setManageStops(event.target.value)
  };

  const handleFilter = () => {
    setPrice(prices)
    setDeparture(departures)
    setStops(manageStops)
  }
  const handleClearFilter = () => {
    setPrice({ starts: null, end: null })
    setDeparture({ starts: null, end: null })
    setStops(null)
    setPrices({ starts: null, end: null })
    setDepartures({ starts: null, end: null })
    setManageStops(null)
  }



  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
        <Typography sx={{ fontWeight: 500 }} >Flight filter</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1, px: '5px' }}>
        <Button variant='contained' onClick={() => handleFilter()} sx={prices.end || departures.end || manageStops ? { background: '#ff4f17', textTransform: 'none', height: '30px', fontSize: '12px', '&:hover': { background: '#d4581d' } }
          : { background: 'lightgrey', textTransform: 'none', cursor: 'not-allowed', height: '30px', fontSize: '12px', '&:hover': { background: 'lightgrey' } }} > Apply</Button>
        <Typography onClick={() => handleClearFilter()} sx={prices.end || departures.end || manageStops ? { color: '#36c', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }
          : { color: 'grey', cursor: 'pointer', cursor: 'pointer', cursor: 'not-allowed' }} >clear filter</Typography>
      </Box>
      <Box>
        <Accordion sx={{ borderRadius: '8px' }} defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: 500, fontSize: '15px' }}>Stops</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel onChange={handleStopCheckboxChange} checked={manageStops === 0} value={0} control={<Checkbox />} label="Non - Stop" />
              <FormControlLabel onChange={handleStopCheckboxChange} checked={manageStops === 1} value={1} control={<Checkbox />} label="1 Stop" />
              <FormControlLabel onChange={handleStopCheckboxChange} checked={manageStops === 2} value={2} control={<Checkbox />} label="2 Stops" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ borderRadius: '8px' }} defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: 500, fontSize: '15px' }}>  Departure time</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                onChange={handleDepartureCheckboxChange}
                checked={departures.starts === "06:00" && departures.end === "12:00"}
                value="06:00,12:00"
                control={<Checkbox />}
                label="06:00-12:00"
              />
              <FormControlLabel
                onChange={handleDepartureCheckboxChange}
                checked={departures.starts === "12:00" && departures.end === "16:00"}
                value="12:00,16:00"
                control={<Checkbox />}
                label="12:00-16:00"
              />
              <FormControlLabel
                onChange={handleDepartureCheckboxChange}
                checked={departures.starts === "16:00" && departures.end === "20:00"}
                value="16:00,20:00"
                control={<Checkbox />}
                label="16:00-20:00"
              />
              <FormControlLabel
                onChange={handleDepartureCheckboxChange}
                checked={departures.starts === "20:00" && departures.end === "06:00"}
                value="20:00,06:00"
                control={<Checkbox />}
                label="20:00-06:00"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ borderRadius: '8px' }} defaultExpanded={true}>
          <AccordionSummary sx={{ borderRadius: '8px' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: 500, fontSize: '15px', color: 'black' }}>OneWay-price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'inline-block', width: '100%' }}>
              <Typography id="range-slider" gutterBottom>
                Price range
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                <Typography sx={{ fontWeight: 500, color: 'grey', fontSize: '14px' }} >₹2000</Typography>
                <Typography sx={{ fontWeight: 500, color: 'grey', fontSize: '14px' }} >₹8000</Typography>
              </Box>
              <form>
                <Slider
                  size="small"
                  min={2000}
                  max={8000}
                  value={rangeValue}
                  onChange={handleRangeChange}
                  aria-labelledby="range-slider"
                  sx={{ color: 'black' }}
                />
              </form>
              <Typography variant="body2" sx={{ fontWeight: '500', textAlign: 'right' }} color="textSecondary">
                Up to ₹ {rangeValue}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ borderRadius: '8px' }} defaultExpanded={true}>
          <AccordionSummary sx={{ borderRadius: '8px' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: 500, fontSize: '15px' }}>Airlines</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button sx={{ my: 1, textTransform: 'none', display: 'block', minWidth: '100%', color: 'grey', fontWeight: 400, textAlign: 'left', cursor: 'not-allowed' }} >
              <input type='checkbox' defaultChecked /> show multiple airlines
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>

    </div>
  )
}
