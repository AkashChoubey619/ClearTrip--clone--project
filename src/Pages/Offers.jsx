import { Box, Grid } from '@mui/material'
import React from 'react'
import OfferNavigation from '../components/Others/OfferNavigation'
import './StylesPage.css'
import OfferLeftNav from '../components/Others/OfferLeftNav'
import OffersSection from '../components/Others/OffersSection'
import OfferRightNav from '../components/Others/OfferRightNav'

export default function Offers() {
  return (
    <div>
      <div>
      <Box sx={{position:'relative'}}>
        <OfferNavigation/>
        </Box>
        <Grid container  spacing={2} style={{padding: "7px 4%",background:'#f9f9f9',minHeight:'100vh'}}>
            <Grid item style={{paddingTop:'10px'}}  xs={12} sm={3}>
                <OfferLeftNav/>
            </Grid>
            <Grid item sx={{background:'white',minHeight:'100%'}} xs={12} sm={6}>
                <OffersSection />
            </Grid>
            <Grid item  xs={12} sm={3}>
                <OfferRightNav/>
            </Grid>

        </Grid>
    </div>
    </div>
  )
}
