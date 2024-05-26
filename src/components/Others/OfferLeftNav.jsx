import { Box, Divider, Typography } from '@mui/material'
import AllOfferIcon from '@mui/icons-material/LocalOffer';
import AirplaneIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/BedroomChild';
import BusIcon from '@mui/icons-material/DirectionsBus';
import ActivityIcon from '@mui/icons-material/DownhillSkiing';
import MobileIcon from '@mui/icons-material/StayCurrentPortrait';
import { usePeopleContext } from '../../Context/MainContext';
import '../Styles.css'
import React from 'react'

export default function OfferLeftNav() {
    const { offerNavigation,setOfferNavigation } = usePeopleContext();
    const listStyle = {
        display: 'flex',
        alignItems: 'center',cursor:'pointer',
        padding: '10px 4px',gap:'14px',
        fontWeight:600,fontSize:'16px',color:'grey'
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ background: '' }}>
                <ul style={{ listStyleType: 'none' }}>
                    <li><Typography sx={{
                        fontWeight: 600, fontSize: '20px', letterSpacing: '1px'
                        , pb: '10px'
                    }}>Get Offers on </Typography></li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='allOffer'?'offerListClicked':'offerList'} 
                    onClick={()=>setOfferNavigation('allOffer')} >
                       <AllOfferIcon/> All Offers
                    </li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='flight'?'offerListClicked':'offerList'} onClick={()=>setOfferNavigation('flight')} >
                       <AirplaneIcon/> Flight offers
                    </li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='hotel'?'offerListClicked':'offerList'} onClick={()=>setOfferNavigation('hotel')}>
                       <HotelIcon/> Hotel Offers
                    </li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='cabs'?'offerListClicked':'offerList'} onClick={()=>setOfferNavigation('cabs')}>
                       <BusIcon/> Buses Offers
                    </li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='other'?'offerListClicked':'offerList'} onClick={()=>setOfferNavigation('other')}>
                       <ActivityIcon/> Activities
                    </li>
                    <Divider orientation='horizontal' flexItem />
                    <li className={offerNavigation==='mobile'?'offerListClicked':'offerList'} onClick={()=>setOfferNavigation('mobile')}>
                       <MobileIcon /> Mobile
                    </li>
                </ul>
            </Box>
        </div>
    )
}
